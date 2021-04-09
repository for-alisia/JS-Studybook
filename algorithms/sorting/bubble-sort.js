// Slow
// Complexity - O(n*n); In the best cases (when array is nearly sorted) - O(n);
// Can be used on nearly sorted arrays;

/** Not optimized version - complexity O(n) */
const sort = (arr) => {
  const newArr = [...arr];
  for (let i = arr.length; i >= 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (newArr[j] > newArr[j + 1]) {
        const temp = newArr[j];
        newArr[j] = newArr[j + 1];
        newArr[j + 1] = temp;
      }
    }
  }

  return newArr;
};

// With ES2015 swap + optimization of no needed iterations on nearly sorted arrays

const sort1 = (arr) => {
  const newArr = [...arr];
  const swap = (ar, idx1, idx2) => {
    [ar[idx1], ar[idx2]] = [ar[idx2], ar[idx1]];
  };
  let noSwap;
  for (let i = arr.length; i >= 0; i--) {
    noSwap = true;
    for (let j = 0; j < i - 1; j++) {
      if (newArr[j] > newArr[j + 1]) {
        swap(newArr, j, j + 1);
        noSwap = false;
      }

      if (noSwap) break;
    }
  }

  return newArr;
};
console.log(sort([23, 46, 78, 24, 17, 9, 98, 7]));
