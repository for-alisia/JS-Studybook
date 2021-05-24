// Priority Queue, based on the heap

class Item {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }
}

const queue = new PriorityQueue();
