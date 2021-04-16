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

  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let currentIdx, currentNode;

    if (index <= this.length / 2) {
      currentIdx = 0;
      currentNode = this.head;
      while (currentIdx !== index) {
        currentNode = currentNode.next;
        currentIdx++;
      }
    } else {
      currentIdx = this.length - 1;
      currentNode = this.tail;

      while (currentIdx !== index) {
        currentNode = currentNode.prev;
        currentIdx--;
      }
    }
    return currentNode;
  }

  set(index, val) {
    let node = this.get(index);

    if (node !== null) {
      node.val = val;
      return true;
    }
    return false;
  }

  insert(val, index) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) {
      return !!this.push(val);
    }
    if (index === 0) {
      return !!this.unshift(val);
    }

    let prevNode = this.get(index - 1);
    let nextNode = prevNode.next;
    let newNode = new NodeDL(val);
    prevNode.next = newNode;
    newNode.prev = prevNode;
    nextNode.prev = newNode;
    newNode.next = nextNode;

    this.length++;

    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();

    if (index === this.length - 1) return this.pop();

    let nodeToDelete = this.get(index);
    let prevNode = nodeToDelete.prev;
    let nextNode = nodeToDelete.next;

    prevNode.next = nextNode;
    nextNode.prev = prevNode;

    nodeToDelete.next = null;
    nodeToDelete.prev = null;

    this.length--;

    return nodeToDelete;
  }

  reverse() {
    let currentNode = this.tail;

    while (currentNode) {
      const next = currentNode.next;
      const prev = currentNode.prev;
      currentNode.next = prev;
      currentNode.prev = next;

      currentNode = prev;
    }

    [this.tail, this.head] = [this.head, this.tail];
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
list.reverse();
console.log([...list]);
