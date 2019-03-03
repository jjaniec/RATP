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
		let opened = new PriorityQueue({
			comparator: (a, b) => b.cost - a.cost
		})
		let closed = new Map()

		src.cost = 0
		opened.push(src)

		while (opened.length > 0) {
			let curr = opened.pop()

			if (closed.get(curr) == true)
				continue
			closed.set(curr, true)

			for (let [node, route] of this.edges.get(curr)) {
				if (node == curr.prev) {
					continue
				}
				let alt = curr.cost + route.cost
				if (alt < node.cost) {
					node.cost = alt
					node.prev = curr
				}
				opened.push(node)
			}
		}
		this.printPath(dst)
	}

	printPath(dst) {
		if (dst.prev)
			this.printPath(dst.prev)
		console.log(dst.name, "(" + dst.cost + ")", "\n\tline:", dst.line.number, dst.line.name)
	}
}

module.exports = Graph;