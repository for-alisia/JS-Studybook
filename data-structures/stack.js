// LIFO - last in -> first out
// call stack
// undo/redo
// history

// Example Implementation with an Array
// O(1) - better approach - cons - too many unnessesary methods
let stack1 = [];
stack1.push('google.com');
stack1.push('instagram.com');
stack1.push('youtube.com');
stack1.pop(); // youtube
stack1.pop(); // instagram
stack1.push('amazon.com');
stack1.pop(); // amazon
// O(n) - bad approach
let stack2 = [];
stack2.unshift('create new file');
stack2.unshift('resized file');
stack2.unshift('cloned out wrinkle');
stack2.shift(); // cloned out wrinkle
stack2.shift(); // resized file

// Lists implementation (more official) - O(1) - work with the beginning of the list
class NodeSt {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new NodeSt(val);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }

    return ++this.length;
  }

  pop() {
    if (this.length === 0) return;
    const nodeToPop = this.first;

    if (this.length === 1) {
      this.last = null;
    }

    this.first = this.first.next;
    nodeToPop.next = null;

    this.length--;

    return nodeToPop;
  }

  *[Symbol.iterator]() {
    let current = this.first;
    while (current) {
      yield current.val;
      current = current.next;
    }
  }
}

let stack = new Stack();
stack.push(1);
stack.push(3);
stack.push(11);
stack.push(45);

console.log([...stack]);

console.log(stack.pop());
console.log([...stack]);
