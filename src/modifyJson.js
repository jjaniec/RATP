const x = require("../routes");
const fs = require("fs");

function line7() {
	let copyCourToIvry = JSON.parse(JSON.stringify(x.routes[14]))
	// console.log(copyCourToIvry)
	copyCourToIvry.line.name = "La Courneuve-8-Mai-1945 - Mairie d\'Ivry"
	copyCourToIvry.name = "La Courneuve-8-Mai-1945 - Mairie d\'Ivry"
	copyCourToIvry.stop_points.splice(29, 4)
	// console.log(copyCourToIvry.line.name)
	// for (let index in copyCourToIvry.stop_points){
		// console.log(copyCourToIvry.stop_points[index].name)
	// }

	let copyCourToVille = JSON.parse(JSON.stringify(x.routes[14]))
	copyCourToVille.line.name = 'La Courneuve-8-Mai-1945 - Villejuif-Aragon'
	copyCourToVille.name = 'La Courneuve-8-Mai-1945 - Villejuif-Aragon'
	// console.log(copyCourToVille)
	copyCourToVille.stop_points.splice(33, 5)
	// for (let index in copyCourToVille.stop_points){
		// console.log(copyCourToVille.stop_points[index].name)
	// }

	let copyIvryToCour = JSON.parse(JSON.stringify(x.routes[15]))
	copyIvryToCour.line.name = 'Mairie d\'Ivry - La Courneuve-8-Mai-1945'
	copyIvryToCour.name = 'Mairie d\'Ivry - La Courneuve-8-Mai-1945'
	copyIvryToCour.stop_points.splice(0, 4)
	// for (let index in copyIvryToCour.stop_points) {
		// console.log(copyIvryToCour.stop_points[index].name)
	// }
	// console.log(copyChatToStDenis)
	// copyAsniereToChat.line.name = 'Asnières-Gennevilliers les Courtilles - Châtillon Montrouge'
	// copyAsniereToChat.stop_points.splice(6, 8)
	// for (let index in copyAsniereToChat.stop_points){
		// console.log(copyAsniereToChat.stop_points[index].name)
	// }
	let copyVilleToCour = JSON.parse(JSON.stringify(x.routes[15]))
	copyVilleToCour.line.name = 'Villejuif-Aragon - La Courneuve-8-Mai-1945'
	copyVilleToCour.name = 'Villejuif-Aragon - La Courneuve-8-Mai-1945'
	copyVilleToCour.stop_points.splice(4, 5)

	x.routes.push(copyVilleToCour)
	x.routes.push(copyIvryToCour)
	x.routes.push(copyCourToVille)
	x.routes.push(copyCourToIvry)
	// console.log(copyVilleToCour)
	// for (let index in copyVilleToCour.stop_points) {
		// console.log(copyVilleToCour.stop_points[index].name)
	// }
	// console.log(copyCourToVille.line.name)
	// console.log("olala : ", x.routes[1].line.routes[0].direction.name)
}

function line13() {
	let copyChatToStDenis = JSON.parse(JSON.stringify(x.routes[28]))
	copyChatToStDenis.stop_points.splice(18, 6)
	// for (let index in copyChatToStDenis.stop_points){
		// console.log(copyChatToStDenis.stop_points[index].name)
	// }

	let copyChatToAsniere = JSON.parse(JSON.stringify(x.routes[28]))
	copyChatToAsniere.stop_points.splice(24, 8)
	copyChatToAsniere.line.name = 'Châtillon Montrouge - Asnières-Gennevilliers les Courtilles'
	copyChatToAsniere.name = 'Châtillon Montrouge - Asnières-Gennevilliers les Courtilles'
	// for (let index in copyChatToAsniere.stop_points){
		// console.log(copyChatToAsniere.stop_points[index].name)
	// }

	let copyAsniereToChat = JSON.parse(JSON.stringify(x.routes[29]))
	copyAsniereToChat.line.name = 'Asnières-Gennevilliers les Courtilles - Châtillon Montrouge'
	copyAsniereToChat.name = 'Asnières-Gennevilliers les Courtilles - Châtillon Montrouge'
	copyAsniereToChat.stop_points.splice(6, 8)
	// for (let index in copyAsniereToChat.stop_points){
		// console.log(copyAsniereToChat.stop_points[index].name)
	// }
	let copyStDenisToChat = JSON.parse(JSON.stringify(x.routes[29]))
	copyStDenisToChat.stop_points.splice(0, 6)
	// for (let index in copyChatToStDenis.stop_points){
		// console.log(copyChatToStDenis.stop_points[index].name)
	// }	
}
 module.exports.editJson = async () => {
 	console.log("1");
	line7()

	line13()
	// 32 OK
	console.log(x.routes[33].name);
	console.log(x.routes[33].stop_points.map(stop => console.log(stop.name)));
	//console.log(x.routes[15]);
	x.routes.splice(29, 1)
	x.routes.splice(28, 1)
	x.routes.splice(15, 1)
	x.routes.splice(14, 1)
	fs.writeFileSync('./routes.json', JSON.stringify(x, null, 4), 'utf-8')
}