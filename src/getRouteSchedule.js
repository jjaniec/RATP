const moment = require('moment')

module.exports.default = (client, directionName, fromStationName, toStationName) => {
	let fromStation = client.stops.stop_points.filter(item => 
		(item.name == fromStationName)
	)
	let toStation = client.stops.stop_points.filter(item => 
		(item.name == toStationName)
	)

	// Get line index in route_schedules array
	let directionIndex = client.schedules.route_schedules.map(e => e.display_informations.direction).indexOf(directionName)
	if (directionIndex == -1)
		return null;

	//remove empty elements
	let rows = client.schedules.route_schedules[directionIndex].table.rows.filter((e) => {
		for (let time of e.date_times)
			if (time && time.date_time == "") return 0
		return 1
	})

	// Find row of stations
	let fromStationRow = rows.map((e) => e.stop_point.name).indexOf(fromStationName)
	let toStationRow = rows.map((e) => e.stop_point.name).indexOf(toStationName)

	// make average of all travel times
	let time = 0;
	for (let metroIndex = 0; metroIndex < rows[fromStationRow].date_times.length; metroIndex++) {
		if (metroIndex >= rows[fromStationRow].date_times.length)
			break ;
		let a = moment(rows[fromStationRow].date_times[metroIndex].date_time)
		let b = moment(rows[toStationRow].date_times[metroIndex].date_time)
		let diff = moment((parseInt(a.format('mm')) < parseInt(b.format('mm'))) ? (b.diff(a)) : (a.diff(b))).format('mm')
		console.log(diff)
		time += parseInt(diff)
	}
	time = time / rows[fromStationRow].date_times.length;
	console.log(time)
}