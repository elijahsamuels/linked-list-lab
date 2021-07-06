// let collection = {
// 	rnadnm: {name: 'Alexandra', next: 'masjdrandm'},
// 	masjdrandm: {name: 'Kirstin', next: 'masjd2randm'},
// 	masjd2randm: {name: 'Juliet', next: 'masjd3randm'},
// 	masjd3randm: {name: 'Timmy', next: 'ntrandm'},
// 	ntrandm: {name: 'Jacob', next: null}
// }

function getName(node) {
    // console.log("getName: ", node.name)
    return node.name;
}

function headNode(nodeKeyName, collection) {
    // console.log("nodeKeyName: ", nodeKeyName)
    // console.log("collection: ", collection)
    // console.log("headNode: ", collection[nodeKeyName])
    return collection[nodeKeyName];
}

function next(node, collection) {
    let nextAddress = node.next;
    // console.log("next: ", collection[`${nextAddress}`])
    return collection[`${nextAddress}`];
}

// should return the node at the provided index
function nodeAt(index, nodeKeyName, collection) {
    let currentNode = headNode(nodeKeyName, collection);
    // console.log("index: ", index)
    // console.log("nodeKeyName: ", nodeKeyName)
    // console.log("collection: ", collection)
    for (let i = 0; i < index; i++) {
        currentNode = next(currentNode, collection);
        // console.log(`currentNode: `, currentNode[i])
    }
    // console.log(`currentNode: `, currentNode)
    return currentNode;
}

// #addressAt should return the address of the node at the address:
function addressAt(index, nodeKeyName, collection) {
    // console.log("index: ", index)
    // console.log("nodeKeyName: ", nodeKeyName)
    // console.log("collection: ", collection)
    if (index == 0) {
        return nodeKeyName;
    } else {
        let addressOfNode = nodeAt(index - 1, nodeKeyName, collection);
        // console.log(addressOfNode)
        return addressOfNode.next;
    }
}

// #indexAt should return the index of the provided node:

function indexAt(index, collection, nodeKeyName) {
    let currentNode = headNode(nodeKeyName, collection);
    let currentIndex = 0;

    while (currentNode != index) {
        currentIndex++;
        currentNode = next(currentNode, collection);
    }
    return currentIndex;
}

function insertNodeAt(index, newNodeAddress, linkedList, collection){
	let previousNode = nodeAt(index - 1, linkedList, collection)
	let subsequentNode = nodeAt(index, linkedList, collection)
  
	let previousNodeIdx = indexAt(previousNode, collection, linkedList)
	let subsequentNodeIdx = indexAt(subsequentNode, collection, linkedList)
	let previousNodeAddress = addressAt(previousNode, linkedList, collection)
	let subsequentNodeAddress = addressAt(subsequentNode, linkedList, collection)
	previousNode.next = newNodeAddress
	let newNode = collection[newNodeAddress]
	newNode.next = subsequentNodeAddress
  }
  
  
  function deleteNodeAt(index, linkedList, collection){
	let previousNode;
	let currentNode = headNode(linkedList, collection);
	for(let i = 0; i < index; i++){
	   previousNode = currentNode
	   currentNode = next(currentNode, collection);
	}
	previousNode.next = currentNode.next
  }