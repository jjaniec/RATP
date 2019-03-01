const axios = require('axios')
const fs = require('fs')
const config = require('../config')

module.exports.default = getlines = () => {
	// Avoir les lignes de metro: https://api.navitia.io/v1/coverage/fr-idf/physical_modes/physical_mode%3AMetro/lines//?q=&

	axios.defaults.baseURL = 'https://api.navitia.io';
	axios.defaults.headers.common['Authorization'] = config.navitia_token;
	axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

	axios.get('/v1/coverage/fr-idf/physical_modes/physical_mode%3AMetro/lines//?q=&')
	.then(resp => {
		console.log(resp.data)
		fs.writeFileSync('./lines.json', JSON.stringify(resp.data, null, 4) , 'utf-8')
	})
	.catch(err => {
		console.error(err);
	})
}

getlines();