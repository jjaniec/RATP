const PriorityQueue = require("priorityqueue")

class Node {
	constructor(name) {
		this.name = name
		this.cost = Infinity
		this.prev = null
		this.visited = false
	}
}

class Graph {
	constructor() {
		this.edges = new Map()
	}

	addNode(v) {
		this.edges.set(v, new Map())
	}

	addEdge(src, dst, cost) {
		this.edges.get(src).set(dst, cost)
	}

	printGraph() {
		for (let [srcKey, srcVal] of this.edges) {
			var str = ""
			for (let [dstKey, dstVal] of srcVal) {
				str += dstKey.name + ":" + dstVal + " "
			}
			console.log(srcKey.name + " -> " + str)
		}
	}

	shortestPath(src, dst) {
		var pq = new PriorityQueue({
			comparator: (a, b) => b.cost - a.cost
		})
		src.cost = 0
		pq.push(src)

		while (pq.length > 0) {
			var curr = pq.pop()
			if (curr == dst) {
				break
			}
			curr.visited = true
			for (let [node, cost] of this.edges.get(curr)) {
				var alt = curr.cost + cost
				if (alt < node.cost) {
					node.cost = alt
					node.prev = curr
				}
				if (node.visited == false) {
					pq.push(node)
				}
			}
		}
		this.printPath(dst)
	}

	printPath(dst) {
		if (dst.prev)
			this.printPath(dst.prev)
		console.log(dst.name + ":" + dst.cost)
	}
}

g = new Graph()
a = new Node("a")
b = new Node("b")
c = new Node("c")
d = new Node("d")
e = new Node("e")
g.addNode(a)
g.addNode(b)
g.addNode(c)
g.addNode(d)
g.addNode(e)
g.addEdge(a, b, 1)
g.addEdge(b, c, 2)
g.addEdge(c, d, 3)
g.addEdge(d, e, 4)
g.addEdge(e, b, 5)
g.addEdge(b, a, 6)
g.printGraph()
g.shortestPath(a, d)

/*
a = new Node("a")
b = new Node("b")
c = new Node("c")
d = new Node("d")
g.addNode(a)
g.addNode(b)
g.addNode(c)
g.addNode(d)
g.addEdge(a, b, 4)
g.addEdge(a, c, 1)
g.addEdge(b, c, 1)
g.addEdge(b, d, 1)
g.addEdge(c, d, 3)
g.shortestPath(a, d)
*/