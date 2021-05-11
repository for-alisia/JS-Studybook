// @ts-nocheck
/** Breads First Search and Depth First Search */

/** Here we use BST tree for adding an elements just as example */

class NodeTree {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new NodeTree(val);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let current = this.root;

    while (current !== null) {
      if (val === current.val) return undefined;

      if (val > current.val) {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      } else {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      }
    }
  }

  find(val) {
    if (this.root === null) return null;

    let foundNode = null;
    let currentNode = this.root;

    while (currentNode && !foundNode) {
      if (currentNode.val === val) {
        foundNode = currentNode;
      }
      if (val < currentNode.val) {
        currentNode = currentNode.left;
      }
      if (val > currentNode.val) {
        currentNode = currentNode.right;
      }
    }

    return foundNode;
  }
  // BFS method
  BFS() {
    let data = [];
    let queue = [];
    let node = this.root;

    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return data;
  }

  // DFS methods (different order of elements in output array)
  DFSPreOrder() {
    const data = [];
    const traverse = (node) => {
      data.push(node.val);

      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };

    traverse(this.root);

    return data;
  }

  DFSPostOrder() {
    const data = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);

      data.push(node.val);
    };

    traverse(this.root);

    return data;
  }
}

let trees = new Tree();
trees.insert(10);
trees.insert(15);
trees.insert(5);
trees.insert(8);

console.log(trees.DFSPreOrder());
console.log(trees.DFSPostOrder());
