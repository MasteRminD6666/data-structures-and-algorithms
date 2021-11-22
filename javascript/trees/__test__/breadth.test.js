const Node = require('../index').Node;
const BinaryTree = require('../index').BinaryTree;
const breadthFirst = require('../index').breadthFirst;

describe('Breadth First Traversal',()=>{

    let tree = new BinaryTree();
    let node1 = new Node(9);
    let node2 = new Node(5);
    let node3 = new Node(1);
    let node4 = new Node(0);
    let node5 = new Node(13);

    tree.root = node1;
    tree.root.left = node2;
    tree.root.right = node3;
    tree.root.left.left = node4;
    tree.root.left.right = node5;

    let emptyTree = new BinaryTree();


  test('Can successfully return an array of all values in the tree, in the order they were encountered',()=>{
      expect(breadthFirst(tree)).toEqual([9, 5, 1, 0, 13]);
  });
  test('Test expected to fail on an empty tree',()=>{
    expect(breadthFirst(emptyTree)).toEqual('Empty Tree');
  });
}) 