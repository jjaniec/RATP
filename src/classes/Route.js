class Route{
	constructor(name, origin, dest) {
		this.origin = origin;
		this.dest = dest;
		this.cost = Math.floor(Math.random() * 10);
		this.line = origin.line.name;
		this.minutesUntilMetro =  Math.floor(Math.random() * 10);	
	}
	getName(){
		console.log(this.routeName);
		console.log(onsenfou());
	}
}

module.exports = Route;