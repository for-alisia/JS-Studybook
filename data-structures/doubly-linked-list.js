class NodeDL {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoblyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new NodeDL(val);
    if (!this.tail) {
      this.tail = newNode;
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    const tail = this.tail;

    if (this.length === 0) {
      return undefined;
    } else if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
    } else {
      this.tail = tail.prev;
      this.tail.next = null;
      tail.prev = null;
      this.length--;
    }

    return tail;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }

    const oldHead = this.head;

    if (this.length === 1) {
      this.tail = null;
      this.head = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;

    return oldHead;
  }

  unshift(val) {
    const newHead = new NodeDL(val);

    if (this.length === 0) {
      this.head = newHead;
      this.tail = newHead;
    } else {
      this.head.prev = newHead;
      newHead.next = this.head;
      this.head = newHead;
    }

    this.length++;
    return this;
  }

  // Iterate throw the list
  *[Symbol.iterator]() {
    let currentNode = this.head;

    while (currentNode) {
      yield currentNode.val;
      currentNode = currentNode.next;
    }
  }
}

var list = new DoblyLinkedList();

list.push(100);
list.push(201);
list.push(250);
list.push(350);
list.push(999);

list.unshift(15);
console.log([...list]);
