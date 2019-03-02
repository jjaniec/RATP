const Route = require("./Route");
const fs	= require("fs");
class Graph{
	constructor() {
		this.edges = new Map()
	}

	addNode(station) {
		//console.log("graph", this.edges.get(station));
		if (this.edges.get(station) == null)
			this.edges.set(station, new Map())
		else
			console.log("slkefjskfjwlefjelfkjselfjeslfjksflkjsf");
	}
	addEdgeBetweenSameStation(origin_platform, allSameStation){
		if (allSameStation.length > 0)
		{
			for (let plaftform of allSameStation)
			{
				this.edges.get(origin_platform).set(plaftform, new Route(origin_platform, plaftform));
			}
		}
	}
	addEdge(origin_platform, destination_platform) {
		this.edges.get(origin_platform).set(destination_platform, new Route(origin_platform, destination_platform));
	}
	
	printGraph() {
		let or;
		var srcKeys = this.edges.keys();
		fs.writeFileSync('./output.json', "");
		for (var srcKey of srcKeys) {
			or = "";
			var srcVal = this.edges.get(srcKey)
			var dstKeys = srcVal.keys()
			var str = "";
			for (var dstKey of dstKeys) {
				var dstVal = srcVal.get(dstKey)
				//console.log(dstVal);
//				str += dstKey.name + ":" + dstVal.line + " " +  "\n origin : " + dstVal.origin.name + "\n";
				str += "destination : " + dstKey.name + ": line nbr : " + dstVal.line.number + " " +  "\n";
				//str += dstKey.name + ":" + dstVal.line + " " +  "\n";
			//	str += dstKey.name + ":" + dstVal.line + " " +  "\n";
			}
			or = "source : " + srcKey.name + ": line nbr : " + srcKey.line.number + " " + " -> " + str;
			//if (!fs.existsSync('./output.json'))
			fs.appendFileSync('./output.json', or);
			console.log(srcKey.name + " -> " + str)
		}
	}	

	/*
	shortestPath(src, dst) {
		var pq = new PriorityQueue()
		pq.push(src)
		while (ps.length == 0) {
			curr = pq.pop()
			adjs = this.edges.get(curr).keys()
			for (var n of adjs) {
				alt = n.cost + this.edges.get(curr).get(n).cost
				if alt < 
			}
		}
	}
	*/
}

module.exports = Graph;