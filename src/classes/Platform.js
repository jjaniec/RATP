
module.exports.Platform = class Platform {
		constructor(name, line){
			this.name = name;
			this.line = line;
			Platform.platformlist.push(this);
		}
		getSameStationDifferentLine()
		{
			let existing_platform = Platform.platformlist.filter((val) => {
				return val.name == this.name && val.line.name != this.line.name
			});
			//console.log(existing_platform);
			//if (existing_platform.length > 0)
			return existing_platform;
		}
		
}

module.exports.Platform.platformlist = [];
