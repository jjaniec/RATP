const fs = require('fs')
const StationMap = require("./classes/StationMap");
const Station = require("./classes/Station").Station;
const getStationByName = require("./classes/Station").getStationByName;
const Platform = require("./classes/Platform").Platform;
const stops = require("../routes");
const {Line} = require("./classes/Line");
const Graph = require("./classes/Graph");

module.exports.main = async () => {
	let newLine;
	let newPlatform;
	let oldPlatform;
	let newGraph = new Graph();
	let newStationMap = new StationMap();
	let stationObj;

	fs.writeFileSync('./output2', "");
	for (let line of stops["routes"])
	{
		newLine = new Line(line);
			
		oldPlatform = null;
		for (let station of line.stop_points)
		{
			stationObj = getStationByName(station.name);
			if (!stationObj)
				stationObj = new Station(station.name, station.coord);
			newStationMap.addNode(stationObj);
			newPlatform = new Platform(station.name, newLine);
			newStationMap.addPlatform(stationObj, newPlatform);
			newGraph.addNode(newPlatform);	
			if (!!oldPlatform)
				newGraph.addEdge(oldPlatform, newPlatform);
			newGraph.addEdgeBetweenSameStation(newPlatform, newPlatform.getSameStationDifferentLine())
			oldPlatform = newPlatform;
		}
	}	
	return {graph : newGraph, stations : newStationMap};
}
