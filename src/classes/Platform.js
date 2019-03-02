
module.exports.Platform = class Platform {
		constructor(name, line){
			this.name = name;
			this.line = line;
			this.cost = Infinity
			this.prev = null
			this.visited = false
			Platform.platformlist.push(this);
		}
		getSameStationDifferentLine()
		{
			let existing_platform = Platform.platformlist.filter((val) => {
				return val.name == this.name && val.line.name != this.line.name
			});
			return existing_platform;
		}
		getPlatformThroughName(name, lineName)
		{
			let exist = Platform.platformlist.filter((val) => {
				return val.name == name && val.line.name == lineName
			});
			if (exist.length != 1) {
				console.log("ERROR")
			}
			return exist[0]
		}
}

module.exports.Platform.platformlist = [];
