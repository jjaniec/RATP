const fs = require('fs')
const path = require('path')

const client = require('./Client')

module.exports = async (start, end) => {
	await client.init(client.client)
	const Graphs = require("./createGraphs");

	let newgraph = await Graphs.main(); 
	newgraph.graph.printGraph();
	newgraph.stations.printStationMap();
	let stationStart = newgraph.stations.findStationByName(start);
	let stationEnd = newgraph.stations.findStationByName(end);

	if (stationStart == null || stationEnd == null)
	{
		return {"error" : "Did not found path"};
	}
	for (let [size, stationPlatform] of stationStart) {
		let graphPlatform = newgraph.graph.edges.get(stationPlatform)
		for (let [node, route] of graphPlatform) {
			if (route.origin.name == route.dest.name) {
				route.cost = 0;
			}
		}
	}
	for (let [size, stationPlatform] of stationEnd) {
		let graphPlatform = newgraph.graph.edges.get(stationPlatform)
		for (let [node, route] of graphPlatform) {
			if (route.origin.name == route.dest.name) {
				route.cost = 0;
			}
		}
	}
 	return  newgraph.graph.shortestPath(stationStart.get(0), stationEnd.get(0));
}