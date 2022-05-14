// Return first repeated value in array

// With nested loops - O(n2)
const firstRecWithLoops = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; i++) {
      if (arr[i] === arr[j]) {
        return arr[i];
      }
    }
  }

  return undefined;
};

// O(n) - but space complexity will be encreased here
const firstReccurring = (arr) => {
  const buckets = {}; // We can use Map if we can expect to get objects
  let recured;
  let i = 0;
  const length = arr.length;

  while (!recured && i < length) {
    if (buckets[arr[i]]) {
      recured = arr[i];
    } else {
      buckets[arr[i]] = true; // Whint true we will not have a case with 0 value that we'll be evaluated as falsy
    }
    i++;
  }

  return recured;
};

console.log(firstReccurring([1, 4, 6, 2, 4, 5, 6])); // 4
console.log(firstReccurring([1, 2, 3, 4]));
