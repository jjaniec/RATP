const path = require('path');
const fs = require('fs');
const http = require('http');
const https = require('https');
const express = require('express');
const bodyParser = require('body-parser')

const client = require('./Client')
const config = require('./../config.json'); 

const getRouteSchedule = require('./getRouteSchedule').default
const loadDatafile = require('./loadDataFile').default
const findPath = require("./findPath");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

(async () => {
	await client.init(client.client)
/*
	client.lines = await loadDatafile('./lines.json', client.getLines.bind(client))
	client.stops = await loadDatafile('./stops.json', client.getStops.bind(client))
	client.routes = await loadDatafile('./routes.json', client.getRoutes)
	client.schedules = await loadDatafile('./schedules.json', client.getSchedules)
*/
	app.get('/getStopPoints', (req, res) => {
		let rslt = Array();
		client.stops.stop_points.forEach((item) => {
			rslt.push(item.name)
		})
		res.send(JSON.stringify(rslt));
	})
	app.post("/path", async (req, res) => {
		let [start, end] = [req.body.start, req.body.end].map((item) => {
			return item
		})
		let json = await findPath(start, end);
//		if (!!json["error"])
//			res.status(400).json(json);
//		else
			return res.status(200).send(JSON.stringify(json));
//console.log(JSON.stringify(json))
    })
	
	app.get('/', (req, res) => {
		res.sendFile(path.join(__dirname, 'web', 'index.html'));
	});
	
	const httpServer = http.createServer(app);
	
	httpServer.listen(3000, () => {
		console.log("Listening")
	});

})()
