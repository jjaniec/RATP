const fs = require('fs')
const path = require('path')

const client = require('./Client')

const config = require('../config')
const Graphs = require("./createGraphs");
const Graph = require("./classes/Graph");

const getRouteSchedule = require('./getRouteSchedule').default

const main = async () => {
	await client.init(client.client)
	let newgraph = await Graphs.main(); 
	newgraph.graph.printGraph();
	newgraph.stations.printStationMap();
	let start = "Saint-Lazare";
	let end = "Nation";
	let stationStart = newgraph.stations.findStationByName(start);
	let stationEnd = newgraph.stations.findStationByName(end);

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

	/*
	await client.getClosestStop(2.3193711, 48.8963911) //  Near 42, Should be Porte de Clichy
	await client.getClosestStop(2.327338, 48.892463) //-> Guy Moquet
	await client.getClosestStop(2.346268, 48.881973) //-> Anvers / barbes
	await client.getClosestStop(2.363010, 48.840200) //-> St Marcel / Austerlitz
	await client.getClosestStop(2.338908, 48.820278, 150) //-> 
	await client.getClosestStop(2.328655, 48.822187, 150) //-> Port d'orleans
	*/
	newgraph.graph.shortestPath(stationStart.get(0), stationEnd.get(0));
	//getRouteSchedule(client.client, 'Château de Vincennes (Paris)', 'Château de Vincennes', 'La Défense (Grande Arche)')

}

main()