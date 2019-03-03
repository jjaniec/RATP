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
			if (!!oldPlatform) {
				newGraph.addEdge(oldPlatform, newPlatform);
			}
			newGraph.addEdgeBetweenSameStation(newPlatform, newPlatform.getSameStationDifferentLine())
			oldPlatform = newPlatform;
		}
	}	
	let start = newPlatform.getPlatformThroughName("Hoche")
	let end = newPlatform.getPlatformThroughName("Argentine")
	console.log("start:", start.name, "\n\tline:", start.line.number, start.line.name)
	console.log("end:", end.name, "\n\tline:", end.line.number, end.line.name)
	console.log("\nShortest Path")
	newGraph.shortestPath(start, end);
}

main()