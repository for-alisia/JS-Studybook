// @ts-nocheck
// Task: check, if the second array contains the squares of numbers in the first array (frequency matters)

// Naive approach (2 nested loops) - O(n*n) - we need to avoid nested loops
const squaredArraysNaive = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    let correctIdx = arr2.indexOf(arr1[i] ** 2);
    if (correctIdx === -1) {
      return false;
    }

    arr2.splice(correctIdx, 1);
  }
  return true;
};

// Solution: create 2 objects, then check the values (keys) and their values (frequencies) - O(n)
const squaredArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  const frCounter1 = {};
  const frCounter2 = {};

  for (let val of arr1) {
    frCounter1[val] = (frCounter1[val] || 0) + 1;
  }

  for (let val of arr2) {
    frCounter2[val] = (frCounter2[val] || 0) + 1;
  }

  for (let key in frCounter1) {
    if (!(key ** 2 in frCounter2)) {
      return false;
    }
    if (frCounter2[key ** 2] !== frCounter1[key]) {
      return false;
    }
  }
  return true;
};

const arr1 = [1, 2, 3, 4]; // { 1: 1, 2: 1, 3: 1, 4: 1 } -fr1
const arr2 = [1, 4, 9, 16]; // { 1: 1, 4: 1, 9: 1, 16: 1} -fr2

//console.log(squaredArrays(arr1, arr2));

/** Anagrams */

const validAnagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  const lookup = {};

  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  for (let char of str1) {
    lookup[char] ? (lookup[char] += 1) : (lookup[char] = 1);
  }

  for (let char of str2) {
    if (!lookup[char]) {
      return false;
    } else {
      lookup[char] -= 1;
    }
  }

  return true;
};

//console.log(validAnagram('catow', 'actor'));

/********************** */

const sameFrequency = (num1, num2) => {
  const obj = {};

  num1 = num1.toString();
  num2 = num2.toString();

  if (num1.length !== num2.length) {
    return false;
  }

  for (let digit of num1) {
    obj[digit] = obj[digit] ? obj[digit] + 1 : 1;
  }

  for (let digit of num2) {
    if (!obj[digit]) {
      return false;
    }

    obj[digit] -= 1;
  }

  return true;
};

// console.log(sameFrequency(1822, 2812));

/*****************/
const hasDuplicateArgs = (...args) => {
  const obj = {};

  for (let arg of args) {
    if (obj[arg]) {
      return true;
    }
    obj[arg] = 1;
  }

  return false;
};

console.log(hasDuplicateArgs(1, 3, 5, 'f', 'f'));
