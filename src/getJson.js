const fs = require('fs')
const client = require('./Client')

const main = async () => {
	await client.init(client.client);
}

main()