// const swap = (arr, idx1, idx2) => {
//   [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
// };

// const pivot = (arr, start = 0, end = arr.length) => {
//   let pivot = arr[start];
//   let pIdx = start;

//   for (let i = start + 1; i < end; i++) {
//     if (arr[i] < pivot) {
//       pIdx++;
//       swap(arr, i, pIdx);
//     }
//   }

//   swap(arr, start, pIdx);

//   return pIdx;
// };

// const sortQuick = (arr, start = 0, end = arr.length) => {
//   if (start < end) {
//     const idx = pivot(arr, start, end);
//     sortQuick(arr, start, idx - 1);
//     sortQuick(arr, idx + 1, end);
//   }

//   return arr;
// };

// console.log(sortQuick([3, 4, 2, 6, 5, 9, 1, 0, 7])); // [2,1,3,4,6,5,9,7]

/** Time Complexity: best - O(log(N)), worst - O(N*N) (if data is almost sorted) - better to pick a middle element
 *
 */

function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  // We are assuming the pivot is always the first element
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  // Swap the pivot from the start the swapPoint
  swap(arr, start, swapIdx);
  return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right); //3
    //left
    quickSort(arr, left, pivotIndex - 1);
    //right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

console.log(quickSort([100, -3, 2, 4, 6, 9, 1, 2, 5, 3, 23]));
