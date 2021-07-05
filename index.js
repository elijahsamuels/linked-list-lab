// let collection = {
// 	rnadnm: {name: 'Alexandra', next: 'masjdrandm'},
// 	masjdrandm: {name: 'Kirstin', next: 'masjd2randm'}, 
// 	masjd2randm: {name: 'Juliet', next: 'masjd3randm'},
// 	masjd3randm: {name: 'Timmy', next: 'ntrandm'},
// 	ntrandm: {name: 'Jacob', next: null}
// }

function getName (node) {
	console.log("getName: ", node.name)
	return node.name
}

function headNode (nodeIndexName, collection) {
	console.log("nodeIndexName: ", nodeIndexName)
	console.log("collection: ", collection)
	console.log("headNode: ", collection[nodeIndexName])
	return collection[nodeIndexName]
}

function next(node, collection) {
	
	let nextAddress = node.next;
	console.log("next: ", collection[`${nextAddress}`])
	return collection[`${nextAddress}`]
	
}

// should return the node at the provided index
function indexAt(node, collection, linkedList){
	let currentNode = headNode(linkedList, collection);
	let currentIdx = 0
	while(currentNode != node){
	  currentIdx++
	  currentNode = next(currentNode, collection)
	//   console.log("currentNode: ", currentNode)
	}
	// console.log("currentIdx: ", currentIdx)
	return currentIdx
  }
  