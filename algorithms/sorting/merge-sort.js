// Time complexety - O(n*log(n)), space complexety - O(n);

// Helper function to merge splited arrays
// Merge 2 sorted arrays
const merger = (arr1, arr2) => {
  let newArr = [];

  let first = 0;
  let second = 0;

  while (first < arr1.length && second < arr2.length) {
    if (arr1[first] < arr2[second]) {
      newArr.push(arr1[first]);
      first++;
    } else if (arr2[second] < arr1[first]) {
      newArr.push(arr2[second]);
      second++;
    } else {
      newArr.push(arr1[first], arr2[second]);
      first++;
      second++;
    }
  }

  while (first < arr1.length) {
    newArr.push(arr1[first]);
    first++;
  }

  while (second < arr2.length) {
    newArr.push(arr2[second]);
    second++;
  }

  return newArr;
};

// Sorting
// Split recursively, until we have only 1 el in array. Then start to merge them.
const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merger(left, right);
};

console.log(mergeSort([1, 4, 7, 8, 7, 3, 11]));
