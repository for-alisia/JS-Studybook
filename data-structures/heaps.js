/** We can use array to represent a heap (tree structure with 2 childs)
 * The left child is stored at (2 * n + 1)
 * The right child is stored at (2 * n + 2)
 * To find a parent by child - (n - 1) / 2 (floored)
 */

// Max Binary Heap
class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];

      if (element <= parent) break;

      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
}

let heap = new MaxBinaryHeap();

heap.insert(55);
heap.insert(25);
heap.insert(35);
heap.insert(15);
heap.insert(60);

console.log(heap.values);
