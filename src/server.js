const path = require('path');
const fs = require('fs');
const http = require('http');
const https = require('https');
const express = require('express');

const navitia = require('./classes/navitia').default
const config = require('./../config.json'); 

const getRouteSchedule = require('./getRouteSchedule').default
const loadDatafile = require('./loadDataFile').default

const app = express();

(async () => {
	let client = new navitia()

	client.lines = await loadDatafile('./lines.json', client.getLines.bind(client))
	client.stops = await loadDatafile('./stops.json', client.getStops.bind(client))
	client.routes = await loadDatafile('./routes.json', client.getRoutes)
	client.schedules = await loadDatafile('./schedules.json', client.getSchedules)

	app.get('/getStopPoints', (req, res) => {
		let rslt = Array();
		client.stops.stop_points.forEach((item) => {
			rslt.push(item.name)
		})
		res.send(JSON.stringify(rslt));
	})
	
	app.get('/', (req, res) => {
		res.sendFile(path.join(__dirname, 'web', 'index.html'));
	});
	
	const httpServer = http.createServer(app);
	
	httpServer.listen(3000, () => {
		console.log("Listening")
	});

})()
