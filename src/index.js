const fs = require('fs')
const path = require('path')
const config = require('../config')
const navitia = require('./classes/navitia').default;
const route = require("./classes/Route")
const {Platform, PlatformList} = require("./classes/Platform");
const stops = require("../routes");
const {Line, lineList} = require("./classes/Line");
const Graph = require("./classes/Graph");


const main = async () => {
	let newLine;
	let newPlatform;
	let oldPlatform;
	let newGraph = new Graph();
	for (let line of stops["routes"])
	{
		newLine = new Line(line);
		oldPlatform = null;
		for (let station of line.stop_points)
		{
			newPlatform = new Platform(station.name, newLine);
			newGraph.addNode(newPlatform);	
			if (!!oldPlatform)
				newGraph.addEdge(oldPlatform, newPlatform);
			newGraph.addEdgeBetweenSameStation(newPlatform, newPlatform.getSameStationDifferentLine())
			oldPlatform = newPlatform;
		}
	}	
	console.log(newGraph.printGraph());
}

main()