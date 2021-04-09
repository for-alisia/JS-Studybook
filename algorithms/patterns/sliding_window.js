// Use when we need to keep tracking subarray in array

// With 2 loops - O(n*n) - not efficient way
const maxSumLoops = (arr, q) => {
  if (q > arr.length) {
    return null;
  }

  let counter = 0;

  for (let i = 0; i < arr.length - q + 1; i++) {
    let window = arr.slice(i, q + i);
    let sum = window.reduce((acc, el) => acc + el, 0);
    sum > counter ? (counter = sum) : null;
  }

  return counter;
};

// Window slider  - O(n)
const maxSum = (arr, q) => {
  if (q > arr.length) {
    return null;
  }
  // Start sum of q numbers
  let sum = arr.slice(0, q).reduce((acc, el) => acc + el, 0);
  // Loop from q to arr.length: take new sum and compare with the old one
  for (let i = q; i < arr.length; i++) {
    sum = Math.max(sum - arr[i - q] + arr[i], sum);
  }

  return sum;
};

// console.log(maxSum([1, 2, 4, 7, 3, 2], 3));

const maxSubbarraySum = (arr, q) => {
  if (arr.length < q) return null;

  let sum = arr.slice(0, q).reduce((acc, el) => acc + el, 0);
  let tempSum = sum;

  for (let i = q; i < arr.length; i++) {
    tempSum = tempSum - arr[i - q] + arr[i];

    sum = Math.max(sum, tempSum);
  }

  return sum;
};

// console.log(maxSubbarraySum([-3, 4, 0, -2, 6, -1], 2));

function minSubArrayLen(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < nums.length) {
    // if current window doesn't add up to the given sum then
    // move the window to right
    if (total < sum && end < nums.length) {
      total += nums[end];
      end++;
    }
    // if current window adds up to at least the sum given then
    // we can shrink the window
    else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= nums[start];
      start++;
    }
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
    else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}

console.log(minSubArrayLen([2, 3, 1, 4, 2, 3], 7));

function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}
