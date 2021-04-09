// search concrete value in a sorted array
// O(log(n))
const search = (arr, val) => {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentEl = arr[middle];
    if (currentEl === val) {
      return middle;
    } else if (currentEl > val) {
      max = middle - 1;
    } else {
      min = middle + 1;
    }
  }

  return -1;
};
