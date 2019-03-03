const fs = require('fs')
const path = require('path')
require('dotenv').load();
const client = require('./Client')
const findPath = require("./findPath");

const main = async () => {
//	await client.init(client.client)

	let start = process.env.PATH_START;
	let end = process.env.PATH_END;
	if (start == null || end == null || start == "" || end == ""){
		console.log("Either End or Start was not given");
		return ;
	}
	let json = await findPath(start, end);
	console.log(json);
}

main()