const Graphs = require("./createGraphs");
const Graph = require("./classes/Graph");

const main = async () => {
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

	newgraph.graph.shortestPath(stationStart.get(0), stationEnd.get(0));
}

main()