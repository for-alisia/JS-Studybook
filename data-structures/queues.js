// FIFO - First In -> First Out
// background tasks
// Uploading resources
// Printing / Task proccessing

// Example using Arrays - always O(N) - better way to implement own class
// O(N)
let q1 = [];
q1.push('First');
q1.push('Second');
q1.push('Third');
q1.shift(); // First
q1.shift(); // Second
// O(N)
let q2 = [];
q2.unshift('First');
q2.unshift('Second');
q2.unshift('Third');
q2.pop(); // First
q2.pop(); // Second

// Implementation with a class - O(1)

class NodeQ {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  inqueue(val) {
    const newNode = new NodeQ(val);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      // @ts-ignore
      this.last.next = newNode;
      this.last = newNode;
    }

    return ++this.length;
  }

  dequeue() {
    if (this.length === 0) return;

    const nodeToDelete = this.first;

    if (this.length === 1) {
      this.last = null;
    }

    this.first = nodeToDelete.next;
    nodeToDelete.next = null;

    this.length--;

    return nodeToDelete;
  }

  *[Symbol.iterator]() {
    let current = this.first;
    while (current) {
      yield current.val;
      current = current.next;
    }
  }
}

let q = new Queue();
q.inqueue(2);
q.inqueue(3);
q.inqueue(7);
q.inqueue(1);

console.log(q.dequeue());

console.log([...q]);
