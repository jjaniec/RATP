const Graphs = require("./createGraphs");
const Graph = require("./classes/Graph");

const main = async () => {
	console.log("TESTS");
	let newgraph = await Graphs.main(); 
	newgraph.graph.printGraph();
	newgraph.stations.printStationMap();
}

main()