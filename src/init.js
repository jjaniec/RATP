const fs = require('fs');
const navitia = require('./classes/navitia').default;

module.exports.default = init = async () => {
	let client = new navitia()
	let lines = client.getLines()
	fs.writeFileSync('./lines.json', JSON.stringify(lines, null, 4) , 'utf-8')
	let stops = await client.getStops()
	fs.writeFileSync('./stops.json', JSON.stringify(stops, null, 4), 'utf-8')
}

init();