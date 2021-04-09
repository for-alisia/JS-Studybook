// Binary Search - faster, but works only on sorted arrays
// O(log(N)) - complexity
function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (arr[middle] === val) {
      return middle;
    } else if (arr[middle] < val) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 9));
