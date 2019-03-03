const fs	= require("fs");

class StationMap {
	constructor(){
		this.edges = new Map()
	}
	addNode(station)
	{
		if (!this.edges.has(station))
			this.edges.set(station, new Map())
	}
	addPlatform(station, platform)
	{
		this.edges.get(station).set(this.edges.get(station).size, platform);
	}
	findStationByName(name)
	{
		for (let [key, val] of this.edges) {
			if (key.name == name) {
				return val;
			}
		}
	}
	printStationMap()
	{
		let stations = this.edges.keys();
		fs.writeFileSync("./stationMap", "");
		let str;
		for (let station of stations)
		{
			str = `station : ${station.name}\n`;
			let stations = this.edges.get(station)
			let stationKeys = stations.keys();
			for (let platform of stationKeys)
			{
				let plat = stations.get(platform);
				str += `\t${plat.name} on line ${plat.line.number} and direction ${plat.line.name}\n`;
			}
			fs.appendFileSync("./StationMap", str);
		}
	}
}
module.exports = StationMap;