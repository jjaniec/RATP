const fs = require('fs')
const path = require('path')
const moment = require('moment')

const config = require('../config')
const navitia = require('./classes/navitia').default

const main = async () => {
	let client = new navitia()

	if (!fs.existsSync('./lines.json'))
	{
		let lines = client.getLines()
		fs.writeFileSync('./lines.json', JSON.stringify(lines, null, 4) , 'utf-8')
	}
	if (!fs.existsSync('./stops.json'))
	{
		let stops = await client.getStops()
		fs.writeFileSync('./stops.json', JSON.stringify(stops, null, 4), 'utf-8')
	}
	else
	{
		await fs.readFile('./stops.json', "utf-8", (err, data) => {
			if (err)
				throw new Error(err)
			client.stops = JSON.parse(data)
		})
	}
	if (!fs.existsSync('./routes.json'))
	{
		let routes = await client.getRoutes()
		fs.writeFileSync('./routes.json', JSON.stringify(routes, null, 4), 'utf-8')
	}
	if (!fs.existsSync('./schedules.json'))
	{
		let schedules = await client.getSchedules()
		fs.writeFileSync('./schedules.json', JSON.stringify(schedules, null, 4), 'utf-8')
	}
	else
	{
		await fs.readFile('./schedules.json', "utf-8", (err, data) => {
			if (err)
				throw new Error(err)
			client.schedules = JSON.parse(data)
			console.log('toto')
			console.log(client.schedules.route_schedules[1].display_informations.code)
			console.log(client.schedules.route_schedules[1].display_informations.direction)
			console.log(client.schedules.route_schedules[1].table.rows[29].stop_point.name)
			console.log(client.schedules.route_schedules[1].table.rows[29].date_times[2].date_time)
			console.log(client.schedules.route_schedules[1].table.rows[30].stop_point.name)
			console.log(client.schedules.route_schedules[1].table.rows[30].date_times[2].date_time)
			console.log(moment(client.schedules.route_schedules[1].table.rows[30].date_times[2].date_time).subtract(moment(client.schedules.route_schedules[1].table.rows[29].date_times[2].date_time)))
		})
	}

/*	await client.getClosestStop(2.3193711, 48.8963911) //  Near 42, Should be Porte de Clichy
	await client.getClosestStop(2.327338, 48.892463) //-> Guy Moquet
	await client.getClosestStop(2.346268, 48.881973) //-> Anvers / barbes
	await client.getClosestStop(2.363010, 48.840200) //-> St Marcel / Austerlitz
	await client.getClosestStop(2.338908, 48.820278, 150) //-> 
	await client.getClosestStop(2.328655, 48.822187, 150) //-> Port d'orleans*/
}

main()