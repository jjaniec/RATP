const fs = require('fs')
const path = require('path')
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

//	2.3193711;48.8963911
	//client.getClosestStop(2.315392, 48.895295)
}

main()