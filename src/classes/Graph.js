const Route = require("./Route");

class Graph{
	constructor() {
		this.edges = new Map()
	}

	addNode(station) {
		this.edges.set(station, new Map())
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
		var srcKeys = this.edges.keys()
		for (var srcKey of srcKeys) {
			var srcVal = this.edges.get(srcKey)
			var dstKeys = srcVal.keys()
			var str = "";
			for (var dstKey of dstKeys) {
				var dstVal = srcVal.get(dstKey)
				//console.log(dstVal);
				str += dstKey.name + ":" + dstVal.line + " ";
			}
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