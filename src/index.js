const Graphs = require("./createGraphs");
const Graph = require("./classes/Graph");

//TODO REGLER GET PLATFORM THROU NAME

const main = async () => {
	console.log("TESTS");
	let newgraph = await Graphs.main(); 
	newgraph.graph.printGraph();
	newgraph.stations.printStationMap();
	let wholeGraph = newgraph.graph;
	let start = "Saint-Lazare";
	let end = "Nation";
	let station_start = newgraph.stations.findStationByName(start);
	let station_end = newgraph.stations.findStationByName(end);

	//console.log(station_start);
	let stations = station_start.keys();
	for (let platKey of station_start)
	{
		let plat = stations.get(platKey);
		console.log(plat);
		let srcPlat = wholeGraph.edges.get(plat);
		console.log(srcPlat);
		for (let dstPlat of srcPlat)
		{
			console.log(dstPlat);
		/*	if (srcPlat.name == dstPlat.name)
			{
				let route = dstPlat.
			}*/
		}
	}

	/*
	let start = newPlatform.getPlatformThroughName("Hoche")
	let end = newPlatform.getPlatformThroughName("Argentine")
	console.log("start:", start.name, "\n\tline:", start.line.number, start.line.name)
	console.log("end:", end.name, "\n\tline:", end.line.number, end.line.name)
	console.log("\nShortest Path")
	newGraph.shortestPath(start, end);*/
}

main()