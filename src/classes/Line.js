

module.exports.Line = class Line{
	constructor(obj) {
		this.name = obj.name;
		this.number = obj.line.code;
		if (obj.stop_points.length > 0)
		{
			this.firstStation = obj.stop_points[0].name;
			this.lastStation = obj.stop_points[obj.stop_points.length - 1].name;
		
		}
		else {
			this.firstStation = null;
			this.lastStation = null;	
		}
		Line.lineList.push(this);
	}	
}
module.exports.Line.lineList = [];