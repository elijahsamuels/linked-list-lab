// let collection = {
// 	rnadnm: {name: 'Alexandra', next: 'masjdrandm'},
// 	masjdrandm: {name: 'Kirstin', next: 'masjd2randm'}, 
// 	masjd2randm: {name: 'Juliet', next: 'masjd3randm'},
// 	masjd3randm: {name: 'Timmy', next: 'ntrandm'},
// 	ntrandm: {name: 'Jacob', next: null}
// }

function getName (node) {
	// console.log("getName: ", node.name)
	return node.name
}

function headNode (nodeKeyName, collection) {
	// console.log("nodeKeyName: ", nodeKeyName)
	// console.log("collection: ", collection)
	// console.log("headNode: ", collection[nodeKeyName])
	return collection[nodeKeyName]
}

function next(node, collection) {
	
	let nextAddress = node.next;
	// console.log("next: ", collection[`${nextAddress}`])
	return collection[`${nextAddress}`]
	
}

// should return the node at the provided index
function nodeAt(index, nodeKeyName, collection) {
	let currentNode = headNode(nodeKeyName, collection);
	// console.log("index: ", index)
	// console.log("nodeKeyName: ", nodeKeyName)
	// console.log("collection: ", collection)
	for(let i =0; i < index; i++) {
		currentNode = next(currentNode, collection)
		// console.log(`currentNode: `, currentNode[i])
	}
	// console.log(`currentNode: `, currentNode)
	return currentNode
}

// #addressAt should return the address of the node at the address:
function addressAt(index, nodeKeyName, collection) {
	// console.log("index: ", index)
	// console.log("nodeKeyName: ", nodeKeyName)
	// console.log("collection: ", collection)
	if(index == 0) {
		return nodeKeyName
	} else {
		let addressOfNode = nodeAt(index-1, nodeKeyName, collection)
		console.log(addressOfNode)
		return addressOfNode.next
	}
}

// #indexAt should return the index of the provided node:

function indexAt() {


}

// function indexAt(node, collection, linkedList){
// 	let currentNode = headNode(linkedList, collection);
// 	let currentIdx = 0
// 	while(currentNode != node){
// 	  currentIdx++
// 	  currentNode = next(currentNode, collection)
// 	//   console.log("currentNode: ", currentNode)
// 	}
// 	// console.log("currentIdx: ", currentIdx)
// 	return currentIdx
//   }
  