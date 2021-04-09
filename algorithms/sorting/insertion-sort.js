// Complexity  - O(n*n);
// We can use it on almost sorted arrays. Or if we need to add new al and sort it

const sortInsert = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];

    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      if (currentVal < arr[j]) {
        arr[j + 1] = arr[j];
      }
    }

    arr[j + 1] = currentVal;
  }

  return arr;
};

console.log(sortInsert([34, 1, 34, 24, 11, 67, 2, 22, 18]));
