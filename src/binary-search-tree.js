const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor () {
    this.rootTree = null;
  }
  root() {
    return this.rootTree;
  }

  add(data) {
    this.rootTree = addNode(this.rootTree, data);

    function addNode(node, data) {
      if (!node) {
        return new Node(data);
      }
      if (node.data === data){
        return node;
      }
      if (data > node.data) {
        node.right= addNode(node.right, data);
      } else {
        node.left = addNode(node.left, data);
      }
      return node;
    }
  }

  has(/* data */) {
    throw new NotImplementedError('Not implemented');
  }

  find(data) {
    return searchNode(this.rootTree, data);
    function searchNode(node, data) {
      if (!node) {
        return null;
      }
      if (node.data === data) {
        return node;
      }
      if (data > node.data) {
        return searchNode(node.right, data);
      } else {
        return searchNode(node.left, data);
      }
    }
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
  }

  min() {
    throw new NotImplementedError('Not implemented');
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};