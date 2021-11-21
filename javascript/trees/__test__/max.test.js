const Node = require('../index').Node;
const BinaryTree = require('../index').BinaryTree;


describe('Find the Max Value in a Tree', () => {

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


  let tree2 = new BinaryTree();

  test('Test expected to fail on an empty tree', () => {
    expect(tree2.findMax()).toBe('Cannot get the maximum value of an empty tree');
  });
  test('Can  the maximum value in a tree', () => {
    expect(tree.findMax()).toEqual(13);
  });
})