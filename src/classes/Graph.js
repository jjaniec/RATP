const Route = require("./Route");
const PriorityQueue = require("priorityqueue")

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
		for (let [srcKey, srcVal] of this.edges) {
			console.log(srcKey.name + " " + srcKey.line.number + " " + srcKey.line.name + " -> ")
			for (let [dstKey, dstVal] of srcVal) {
				console.log("    "+ dstKey.name + " " + dstKey.line.number + " " + dstKey.line.name)
			}
		}
	}

	shortestPath(src, dst) {
		var pq = new PriorityQueue({
			comparator: (a, b) => b.cost - a.cost
		})
		src.cost = 0
		pq.push(src)

		while (pq.length > 0) {
			var curr = pq.pop()
			if (curr == dst) {
				break
			}
			curr.visited = true
			for (let [node, route] of this.edges.get(curr)) {
				var alt = curr.cost + route.cost
				//console.log(curr.name, node.name, node.line.number)
				if (alt < node.cost) {
					node.cost = alt
					node.prev = curr
				}
				if (node.visited == false) {
					pq.push(node)
				}
			}
		}
		this.printPath(dst)
	}

	printPath(dst) {
		if (dst.prev)
			this.printPath(dst.prev)
		console.log(dst.name + ":" + dst.cost)
	}
}

module.exports = Graph;