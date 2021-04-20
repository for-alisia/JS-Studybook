// Very quick search
// At most 2 children
// Sorted: less to the left, greater to the right

class NodeBST {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new NodeBST(val);
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
}

let tree = new BST();
tree.insert(10);
tree.insert(15);
tree.insert(5);
tree.insert(8);

console.log(tree);
