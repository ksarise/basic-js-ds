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

  has(data) {
    return this.searchNode(this.rootTree, data) !== null;
  }

  find(data) {
    return this.searchNode(this.rootTree, data);
  }

  searchNode(node, data) {
    if (!node) {
      return null;
    }
    if (node.data === data) {
      return node;
    }
    if (data > node.data) {
      return this.searchNode(node.right, data);
    } else {
      return this.searchNode(node.left, data);
    }
  }

  remove(data) {
    this.rootTree = removeNode(this.rootTree, data)
    function removeNode(node, data) {
      if (!node) {
        return null;
      }
      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          return node.right;
        }
        if (!node.right) {
          return node.left;
        }
        let rightMin = node.right;
        while (rightMin.left) {
          rightMin = rightMin.left;
        }
        node.data = rightMin.data;
        node.right = removeNode(node.right, rightMin.data);
        return node;
      }
    }
  }

  min() {
    if (!this.rootTree) {
      return null;
    }
    let node = this.rootTree;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.rootTree) {
      return null;
    }
    let node = this.rootTree;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};