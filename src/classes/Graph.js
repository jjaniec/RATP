const Route = require("./Route");
const fs	= require("fs");
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
		console.log("aslkdj");
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
}

module.exports = Graph;