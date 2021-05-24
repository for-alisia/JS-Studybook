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

  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.bubbleDown();
    }

    return max;
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

  bubbleDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];

    while (true) {
      let leftIdx = 2 * idx + 1;
      let rightIdx = 2 * idx + 2;
      let left, right;
      let swap = null;

      if (leftIdx < length) {
        left = this.values[leftIdx];
        if (left > element) {
          swap = leftIdx;
        }
      }

      if (rightIdx > length) {
        right = this.values[rightIdx];

        if ((swap === null && right > element) || (swap !== null && right > left)) {
          swap = rightIdx;
        }
      }

      if (swap === null) break;

      this.values[idx] = this.values[swap];
      this.values[swap] = element;
    }
  }
}

let heap = new MaxBinaryHeap();

heap.insert(55);
heap.insert(25);
heap.insert(35);
heap.insert(15);
heap.insert(60);
heap.extractMax();

console.log(heap.values);
