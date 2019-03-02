const fs = require('fs')
const path = require('path')
const config = require('../config')
const navitia = require('./classes/navitia').default;
const route = require("./classes/Route")
const {Platform, platformlist} = require("./classes/Platform");
const stops = require("../routes");
const {Line, lineList} = require("./classes/Line");
const Graph = require("./classes/Graph");

function getExactlySamePlatform(name, line, list)
{
	let exist = [];
	if (list.length > 0)
	{
		exist = list.filter((val)=> {
			fs.appendFileSync('./output2', "name " + name + "\n" + "val name : " + val.name + "\n" );
//			console.log("val name", val.name);
		//	console.log("name", name);
//			return val.name == name && val.line.number == line.number
			return val.name == name && val.line.name == line.name
		});
	}
//	console.log("platform", exist);
	//console.log(existing_platform);
	//if (existing_platform.length > 0)
	if (exist.length == 1)
		console.log("EFJKHFEWKFHJWKEFJ");
	if (exist.length > 1)
		throw("SHOULD NOT HAVE MORE THAN 1 EQUAL PLATFORM");
	return exist;
}

const main = async () => {
	let newLine;
	let newPlatform;
	let oldPlatform;
	let newGraph = new Graph();
	let i = 0;

	fs.writeFileSync('./output2', "");
	for (let line of stops["routes"])
	{
		if (i < 2)
		{
			newLine = new Line(line);
			
			oldPlatform = null;
			for (let station of line.stop_points)
			{
				let equalPlatform = getExactlySamePlatform(station.name, newLine, Platform.platformlist);
				if (equalPlatform.length > 0)
					newPlatform = equalPlatform[0];
				else 
					newPlatform = new Platform(station.name, newLine);
				newGraph.addNode(newPlatform);	
				if (!!oldPlatform)
					newGraph.addEdge(oldPlatform, newPlatform);
				newGraph.addEdgeBetweenSameStation(newPlatform, newPlatform.getSameStationDifferentLine())
				oldPlatform = newPlatform;
			}
			i++;
		}
	}	
	console.log(newGraph.printGraph());
}

main()