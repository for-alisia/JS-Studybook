// Return the first pair that summ is equal to 0 in ordered array

const sumZero = (arr) => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
};

//console.log(sumZero([-3, -2, -1, 0, 1, 1, 4]));

// Count unique values in the sorted array
const countValues = (arr) => {
  if (arr.length === 0) {
    return 0;
  }

  let pointer = 1;
  let counter = 1;

  while (pointer < arr.length) {
    if (arr[pointer - 1] !== arr[pointer]) {
      counter++;
    }
    pointer++;
  }

  return counter;
};

/** Another way of doing this */
const countValuesNoCounter = (arr) => {
  if (arr.length === 0) {
    return 0;
  }

  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }

  return i + 1;
};

//console.log(countValuesNoCounter([-1, -1, -1, 0, 2, 2]));

/********************** */
const avergePair = (arr, average) => {
  if (arr.length < 2) return false;

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let av = (arr[left] + arr[right]) / 2;

    if (av === average) {
      return true;
    } else if (av > average) {
      right--;
    } else {
      left++;
    }
  }

  return false;
};

// console.log(avergePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));

/********************** */
const isSubsequence1 = (str1, str2) => {
  if (str1.length < 2 || str2.length < 2) return false;

  for (let i = 0; i < str1.length - 1; i++) {
    let substr = str1.substr(i, 1);

    if (str2.includes(substr)) return true;
  }

  return false;
};

function isSubsequence2(str1, str2) {
  var i = 0;
  var j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}

function isSubsequence(str1, str2) {
  if (str1.length === 0) return true;
  if (str2.length === 0) return false;
  if (str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1));
  return isSubsequence(str1, str2.slice(1));
}

console.log(isSubsequence2('swabc', 'joabracadabra'));
