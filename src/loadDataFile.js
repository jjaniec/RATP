const fs = require('fs');

module.exports.default = async function loadDatafile(filename, callback) {
	if (!fs.existsSync(filename))
	{
		console.log(`Fetch ${filename}`)
		let x = await callback()
		fs.writeFileSync(filename, JSON.stringify(x, null, 4) , 'utf-8')
		return (x);
	}
	else
	{
		console.log(`Load cached file: ${filename}`)
		return JSON.parse(fs.readFileSync(filename))
	}
}