function inOrder(currentNode) {
    if(currentNode.left){
        inOrder(currentNode.left)
    } 
    console.log(currentNode.data)
    if(currentNode.right) {
        inOrder(currentNode.right)
    }
}

function findOrAdd(rootNode, newNode) {
    let currentNode = rootNode 
    if (newNode.data == rootNode.data) {
        return true
    }
    if (newNode.data < rootNode.data) {
        currentNode = rootNode.left
        if (currentNode) {
            return findOrAdd(currentNode, newNode)
        } else {
            rootNode.left = newNode
        }
    } else if (newNode.data > rootNode.data) {
        currentNode = rootNode.right
        if (currentNode) {
            return findOrAdd(currentNode, newNode)
        } else {
            rootNode.right = newNode
        }
    }
}


function max(node) {
    if (!node.right) {
        return node
    } else {
        return max(node.right)
    }
}

function min(node) {
    if (!node.left) {
        return node
    } else {
        return min(node.left)
    }
}
