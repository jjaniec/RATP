const fs = require('fs')
const path = require('path')

const config = require('../config')
const navitia = require('./classes/navitia').default

const getRouteSchedule = require('./getRouteSchedule').default
const loadDatafile = require('./loadDataFile').default

const main = async () => {
	let client = new navitia()

	client.lines = await loadDatafile('./lines.json', client.getLines.bind(client))
	client.stops = await loadDatafile('./stops.json', client.getStops.bind(client))
	client.routes = await loadDatafile('./routes.json', client.getRoutes)
	client.schedules = await loadDatafile('./schedules.json', client.getSchedules)

	getRouteSchedule(client, 'Château de Vincennes (Paris)', 'Château de Vincennes', 'La Défense (Grande Arche)')
	/*
	await client.getClosestStop(2.3193711, 48.8963911) //  Near 42, Should be Porte de Clichy
	await client.getClosestStop(2.327338, 48.892463) //-> Guy Moquet
	await client.getClosestStop(2.346268, 48.881973) //-> Anvers / barbes
	await client.getClosestStop(2.363010, 48.840200) //-> St Marcel / Austerlitz
	await client.getClosestStop(2.338908, 48.820278, 150) //-> 
	await client.getClosestStop(2.328655, 48.822187, 150) //-> Port d'orleans
	*/
}

main()