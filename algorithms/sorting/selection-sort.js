// Slow
// Compare first with the others. And if we find less value, then swap first and min
// Complexity - O(n*n);
// If you need to minimize the amount of swaping, you can use selection sort.

const sortSel = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) min = j;
    }

    if (min !== i) {
      const temp = arr[min];
      arr[min] = arr[i];
      arr[i] = temp;
    }
  }

  return arr;
};

console.log(sortSel([30, 62, 11, 8, 45, 76, 23, 56, 21]));
