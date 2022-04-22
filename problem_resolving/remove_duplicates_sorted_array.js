var removeDuplicates = function (nums) {
  let k = 0;
  let i = 0;

  while (i < nums.length && nums[i] !== '_') {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i + 1, 1);
      nums.push('_');
    } else {
      i++;
      k++;
    }
  }

  return k;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([1, 2, 3, 4]));
