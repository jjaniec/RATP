class Route{
	constructor(origin, dest) {
		this.origin = origin;
		this.dest = dest;
		this.cost = Math.floor(Math.random() * 10);
		this.line = origin.line.name;
		this.minutesUntilMetro =  Math.floor(Math.random() * 10);	
	}
}

module.exports = Route;