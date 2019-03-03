
module.exports.Station = class Station {
	constructor(name, coord){
		this.name = name;
		this.coord = {
			lat: parseFloat(coord.lat),
			lon : parseFloat(coord.lon)
		}
		Station.stationlist.push(this);
	}
}

module.exports.getStationByName = (name) =>
	{
		Station = module.exports.Station
		if (Station.stationlist == [])
		{
			return null;
		}
		for (let station of Station.stationlist)
		{
			if (station.name == name)
				return station;
		}
		return null;
	}

module.exports.Station.stationlist = [];