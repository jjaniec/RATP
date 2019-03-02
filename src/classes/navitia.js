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

		this.lines = null;
		this.stops = {
		};
		this.stopsPages = null
	}

	getLines() {
		return axios.get(`/v1/coverage/${this.coverage}/physical_modes/physical_mode%3AMetro/lines//?q=&`)
		.then(resp => {
			this.lines = resp.data
			return resp.data;
		})
		.catch(err => {
			throw new Error('Failed to fetch lines', err);
		})
	}

	async getStopsPage(page) {
		return axios.get(`/v1/coverage/${this.coverage}/physical_modes/physical_mode%3AMetro/stop_points//?start_page=${page}&count=383`)
		.then(resp => {
			return (resp.data)
		})
		.catch(async err => {
			throw new Error('Failed to fetch stops', err.response);
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

	async getClosestStop(lon, lat) {
		return axios.get(`/v1/coverage/${this.coverage}/coord/${lon}%3B${lat}/places_nearby?count=5&type%5B%5D=stop_point&`)
		.then(resp => {
			for (var i = 0; i < resp.data.places_nearby.length; i++) {
				console.log(`i : ${i} - name: |${resp.data.places_nearby[i].name}|`)
				if (resp.data.places_nearby[i].name === "Porte de Clichy (Paris)") // -> A remplacer par un foreach
				{
					tmp = this.stops.stop_points.filter(item => {
						console.log(item.label)
						console.log(resp.data.places_nearby[i].name)
						if (item.label == resp.data.places_nearby[i].name)
						{
							console.log("Success")
						}
						return item.label == resp.data.places_nearby[i].name
					})
					return tmp
				}
			}
			return null;
		})
		.catch(err => {
			throw new Error('Failed to fetch closest metro station', err);
		})
	}

	async getRoutes() {
		return axios.get(`/v1/coverage/${this.coverage}/networks/${this.network}/routes?count=32&depth=3`)
		.then(resp => {
			//console.log(resp.data)
			return resp.data
		})
		.catch(err => {
			throw new Error('Failed to fetch routes', err);
		})
	}
}
