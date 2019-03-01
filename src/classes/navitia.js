const axios = require('axios');
const fs = require('fs');
const config = require('../../config');

module.exports.default = class navitia {
	constructor() {
		axios.defaults.baseURL = 'https://api.navitia.io';
		axios.defaults.headers.common['Authorization'] = config.navitia_token;
		axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

		this.lines = null;
		this.stops = {
		};
		this.stopsPages = null
	}

	getLines() {
		return axios.get('/v1/coverage/fr-idf/physical_modes/physical_mode%3AMetro/lines//?q=&')
		.then(resp => {
			return resp.data;
		})
		.catch(err => {
			throw new Error('Failed to fetch lines', err);
		})
	}
	
	async getStopsPage(page) {
		return axios.get(`/v1/coverage/fr-idf/physical_modes/physical_mode%3AMetro/stop_points//?start_page=${page}&`)
		.then(resp => {
			return (resp.data)
		})
		.catch(async err => {
			throw new Error('Failed to fetch stops', err.response);
		})
	}

	async getStops() {
		// 383 items on paris with 25 items/page
		this.stopsPages = await Promise.all(Array(16).fill(0).map((val, index) => this.getStopsPage(index)))
		this.stops = Object.assign(...this.stopsPages);
		//console.log(this.stops)
		return this.stops;
	}
}
