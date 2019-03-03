const fs = require('fs')
const path = require('path')
const editJson = require("./modifyJson");

const navitia = require('./classes/navitia').default

module.exports.client = new navitia()

async function loadDatafile(filename, callback) {
	if (!fs.existsSync(filename))
	{
		console.log(`Fetch ${filename}`)
		let x = await callback()
		if (filename == "./routes.json")
			await editJson.editJson();
		fs.writeFileSync(filename, JSON.stringify(x, null, 4) , 'utf-8')
		return (x);
	}
	else
	{
		console.log(`Load cached file: ${filename}`)
		return JSON.parse(fs.readFileSync(filename))
	}
}


module.exports.init = async (client) => {
	client.lines = await loadDatafile('./lines.json', client.getLines.bind(client))
	client.stops = await loadDatafile('./stops.json', client.getStops.bind(client))
	client.routes = await loadDatafile('./routes.json', client.getRoutes)

	client.schedules = await loadDatafile('./schedules.json', client.getSchedules)
}

//module.exports.client = client;