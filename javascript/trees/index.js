class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}
class BinaryTree {
    constructor(root) {
        this.root = null;
    }
    preOrder() {
        const result = [];
        const shift = (node) => {
            result.push(node.value);
            if (node.left) shift(node.left);
            if (node.right) shift(node.right);
        };
        shift(this.root);
        return result;
    }
    postOrder() {
        const result = [];
        const shift = (node) => {
            if (node.left) shift(node.left);
            if (node.right) shift(node.right);
            result.push(node.value);
        };
        shift(this.root);
        return result;
    }
    inOrder() {
        const result = [];
        const shift = (node) => {
            if (node.left) shift(node.left);
            result.push(node.value);
            if (node.right) shift(node.right);
        };
        shift(this.root);
        return result;
    }
    findMax() {
        if (this.root == null) {
            return ('Cannot get the maximum value of an empty tree');
        }
        let max = this.root.value;
        const show = (node) => {
            console.log('this is the node rami', node);
            if (node.value >= max) {
                max = node.value
            }
            if (node.left) show(node.left);
            if (node.right) show(node.right);
        }
        show(this.root);
        return max;
    }
}
class BinarySearchTree extends BinaryTree {
    constructor(root) {
        super(root);
    }
    add(value) {
        let node = new Node(value);
        let pointer = this.root;

        const _add = (node) => {
            if (!this.root) {
                this.root = node;
            } else if (node.value > pointer.value) {
                if (pointer.right) {
                    pointer = pointer.right;
                    _add(node)
                } else {
                    pointer.right = node;
                }
            } else if (node.value < pointer.value) {
                if (pointer.left) {
                    pointer = pointer.left;

                    _add(node)
                } else {
                    pointer.left = node;
                }
            }
        }
        _add(node);
    }

    search(value) {
        let orderList = tree.inOrder()

        if (orderList.includes(value)) {
            return true;
        }
        else {
            return false
        }
    }

}
function breadthFirst(tree) {

    let rootNode = tree.root;
    let breadthOrder = [];
    let tempQueue = [];
    if (rootNode === null) {
        return 'Empty Tree';
    }
    tempQueue.push(rootNode);

    while (tempQueue.length > 0) {

        let currentNode = tempQueue[0];

        if (currentNode.left !== null) {
            tempQueue.push(currentNode.left)
        }

        if (currentNode.right !== null) {
            tempQueue.push(currentNode.right)
        }

        breadthOrder.push(tempQueue.shift().value)
    }
    return breadthOrder;
}
module.exports = { Node, BinaryTree, BinarySearchTree, breadthFirst }