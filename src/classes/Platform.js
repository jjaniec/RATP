
module.exports.Platform = class Platform {
		constructor(name, line){
			this.name = name;
			this.line = line;
			this.cost = Infinity
			this.prev = null
			Platform.platformlist.push(this);
		}
		copy() {
			let newPlatform = new Platform(this.name, this.line)
			newPlatform.cost = this.cost
			newPlatform.prev = this.prev
			return newPlatform
		}
		getSameStationDifferentLine()
		{
			let existing_platform = Platform.platformlist.filter((val) => {
				return val.name == this.name && val.line.name != this.line.name
			});
			return existing_platform;
		}
		getPlatformThroughName(name)
		{
			let exist = Platform.platformlist.filter((val) => {
				return val.name == name
			});
			if (exist.length == 0) {
				console.log("ERROR")
			}
			return exist[0]
		}
}

module.exports.Platform.platformlist = [];
