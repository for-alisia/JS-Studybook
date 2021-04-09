// @ts-nocheck
// Works with numbers (binary), doesn't use comparisons, uses the fact, that the amount of digits influence
// Time Complexety - O(nk), Space Complexety - O(n+k) //n - array, k - number of digits

/**  My solution */
const getDigit1 = (num, place) => {
  const numToString = num.toString();
  const digits = numToString.split('').reverse(); // unefficient reverse()
  return digits.length - 1 < place ? 0 : digits[place];
};

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10; // simple Math - fast
}

const digitCount = (num) => (num === 0 ? 1 : Math.floor(Math.log10(Math.abs(num))) + 1);

const mostDigits = (numArr) => {
  let maxCount = 1;

  numArr.forEach((el) => {
    maxCount = Math.max(digitCount(el), maxCount);
  });

  return maxCount;
};

// Official solution
function radixSort(nums) {
  let maxDigitCount = mostDigits(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
}

console.log(radixSort([12, 345, 65, 2, 0, 56]));

// My Solution
// const radixSort1 = (arr) => {
//   const maxLength = mostDigits(arr);

//   for (let i = 0; i < maxLength; i++) {
//     const bucket = {
//       0: [],
//       1: [],
//       2: [],
//       3: [],
//       4: [],
//       5: [],
//       6: [],
//       7: [],
//       8: [],
//       9: [],
//     };

//     arr.forEach((el) => {
//       const digit = getDigit(el, i);
//       bucket[digit].push(el);
//     });

//     arr = [];

//     for (let j = 0; j < 10; j++) {
//       arr = arr.concat(bucket[j]);
//     }
//   }

//   return arr;
// };
