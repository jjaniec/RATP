const Route = require("./Route");
const moment = require("moment")
const fs	= require("fs");
const PriorityQueue = require("priorityqueue")

class Graph{
	constructor() {
		this.edges = new Map()
	}

	addNode(platform) {
		if (this.edges.get(platform) == null)
			this.edges.set(platform, new Map())
		else
			console.log("slkefjskfjwlefjelfkjselfjeslfjksflkjsf");
	}

	addEdgeBetweenSameStation(origin_platform, allSameStation){
		if (allSameStation.length > 0)
		{
			for (let platform of allSameStation)
			{
				this.edges.get(origin_platform).set(platform, new Route(origin_platform, platform));
				this.edges.get(platform).set(origin_platform, new Route(platform, origin_platform));
			}
		}
	}

	addEdge(origin_platform, destination_platform) {
		this.edges.get(origin_platform).set(destination_platform, new Route(origin_platform, destination_platform));
	}
	
	printGraph() {
		let or;
		var srcKeys = this.edges.keys();
		fs.writeFileSync('./output', "");
		for (var srcKey of srcKeys) {
			or = "";
			var srcVal = this.edges.get(srcKey)
			var dstKeys = srcVal.keys()
			var str = "";
			for (var dstKey of dstKeys) {
				var dstVal = srcVal.get(dstKey)
				str += "\tdestination : " + dstKey.name + ": line nbr : " + dstKey.line.number + " line name : " + dstKey.line.name +  "\n";
			}
			or = "source : " + srcKey.name + ": line nbr : " + srcKey.line.number + " line name : " + srcKey.line.name + " -> "+  "\n" + str + "\n";
			fs.appendFileSync('./output', or);
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
		console.log(this.createJsonPath(dst))
	}
	printPath(dst) {
		if (dst.prev)
			this.printPath(dst.prev)
		console.log(dst.name, "(" + dst.cost + ")", "\n\tline:", dst.line.number, dst.line.name)
	}
	createJsonPath(dst) {
		let jsonPath = []
		let time = moment()
		let curr = dst
		while (curr) {
			let obj = this.createObject(curr, time)
			jsonPath.unshift(obj)
			curr = curr.prev
		}
		this.removeDuplicateStartEnd(jsonPath)
		return jsonPath
	}
	createObject(curr, startTime) {
		let obj = new Object()
		obj.station = curr.name
		obj.lineNumber = curr.line.number
		obj.lineName = curr.line.name
		let now = moment(startTime)
		now.add(curr.cost, 'm');
		obj.time = now.format("HH:mm")
		return obj
	}
	removeDuplicateStartEnd(jsonPath) {
		while (jsonPath.length >= 2 && jsonPath[0].station == jsonPath[1].station) {
			jsonPath.shift()
		}
		while (jsonPath.length >= 2 && jsonPath[jsonPath.length - 1].station == jsonPath[jsonPath.length - 2].station) {
			jsonPath.pop()
		}
	}
}

module.exports = Graph;