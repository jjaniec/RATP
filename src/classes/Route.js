const getRouteSchedule = require('../getRouteSchedule').default
const client = require('../Client').client;

class Route{
	constructor(origin, dest) {
		this.origin = origin;
		this.dest = dest;
		console.log(origin.line.number)
		//this.cost = Infinity
//		console.log(origin.line.name)
	//	this.cost = Math.floor(Math.random() * 10) + 1;
//console.log(`${this.cost}: ${origin.line.name} - ${origin.name} - ${dest.name}`)
		this.cost = getRouteSchedule(client, origin.line.number, origin.line.direction, origin.name, dest.name);
		console.log(this.cost)
		this.line = origin.line;
		this.minutesUntilMetro =  Math.floor(Math.random() * 10);	
	}
}

module.exports = Route;
