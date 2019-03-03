const axios = require('axios');
const fs = require('fs');
const config = require('../../config');

module.exports.default = class navitia {
	constructor() {
		axios.defaults.baseURL = 'https://api.navitia.io';
		axios.defaults.headers.common['Authorization'] = config.navitia.token;
		axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
		this.coverage = config.navitia.coverage
		this.network = config.navitia.network

		this.getLines = this.getLines.bind(this)
		this.getStops = this.getStops.bind(this)
		this.getRoutes = this.getRoutes.bind(this)
		this.getSchedules = this.getSchedules.bind(this)


		this.lines = null;
		this.stops = null
		this.stopsPages = null
		this.routes = null;
		this.schedules = null
	}

	getLines() {
		return axios.get(`/v1/coverage/${this.coverage}/physical_modes/physical_mode%3AMetro/lines//?q=&`)
		.then(resp => {
			this.lines = resp.data
			return resp.data;
		})
		.catch(err => {
			throw new Error(err);
		})
	}

	async getStopsPage(page) {
		return axios.get(`/v1/coverage/${this.coverage}/physical_modes/physical_mode%3AMetro/stop_points//?start_page=${page}&count=383`)
		.then(resp => {
			return (resp.data)
		})
		.catch(async err => {
			throw new Error(err.response);
		})
	}

	async getStops() {
		// 383 items on paris with 25 items/page
		try {
			this.stopsPages = await Promise.all(Array(1).fill(0).map((val, index) => this.getStopsPage(index)))
			this.stops = Object.assign(...this.stopsPages);
			//console.log(this.stops)
			//fs.writeFileSync('./stops.json', JSON.stringify(this.stops, null, 4), 'utf-8')
			return this.stops;
		} catch (e) {
			console.error(e)
		}
	}

	async getClosestStop(lon, lat, searchcount = 50) {
		let rslt = []
		let tmp = null;

		return axios.get(`/v1/coverage/${this.coverage}/coord/${lon}%3B${lat}/places_nearby?count=${searchcount}&type%5B%5D=stop_point&`)
		.then(resp => {
			for (var i = 0; i < resp.data.places_nearby.length; i++) {
				console.log(`i : ${i} - name: |${resp.data.places_nearby[i].name}|`)
				tmp = this.stops.stop_points.filter(item => 
					(item.name == resp.data.places_nearby[i].name || item.label == resp.data.places_nearby[i].name)
				)
				if (tmp && tmp[0] && !(rslt.includes(tmp[0])))
					rslt.push(tmp[0])
			}
			rslt.forEach((item) => {
				console.log(item.name)
			})
			return rslt;
		})
		.catch(err => {
			throw new Error(err);
		})
	}

	async getRoutes() {
		return axios.get(`/v1/coverage/${this.coverage}/networks/${this.network}/routes?count=32&depth=3`)
		.then(resp => {
			//console.log(resp.data)
			return resp.data
		})
		.catch(err => {
			throw new Error(err);
		})
	}

	async getSchedules(datetime = "20190306T090000") {
		return axios.get(`/v1/coverage/${this.coverage}/physical_modes/physical_mode%3AMetro/routes//route_schedules?from_datetime=${datetime}&duration=600&count=32&`)
		.then(resp => {
//			resp.data.filter()
			return resp.data;
		})
		.catch(err => {
			throw new Error(err);
		})
	}
}
