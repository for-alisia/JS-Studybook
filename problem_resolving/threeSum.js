var threeSum = function (nums) {
  let triplets = [];

  let i = 0;

  while (i < nums.length) {
    let j = 1;
    while (j < nums.length) {
      if (i === j) {
        j++;
      } else {
        let sum = nums[i] + nums[j];

        for (let k = j + 1; k < nums.length; k++) {
          if (k === i || k === j) continue;
          if (sum + nums[k] === 0) {
            let newSumm = [nums[i], nums[j], nums[k]];

            if (isUnique(newSumm, triplets)) {
              triplets.push([nums[i], nums[j], nums[k]]);
            }
          }
        }
        j++;
      }
    }
    i++;
  }

  return triplets;
};

function isUnique(el, arr) {
  if (arr.length === 0) return true;
  let isUnique = true;
  let com = [...el].sort((a, b) => a - b);

  arr.forEach((sum) => {
    let newSum = [...sum].sort((a, b) => a - b);
    if (JSON.stringify(com) === JSON.stringify(newSum)) {
      isUnique = false;
    }
  });

  return isUnique;
}

// console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// console.log(threeSum([0, 0, 0, 0]));
// console.log(threeSum([-1, 0, 1, 0]));
console.log(threeSum([-4, -2, 1, -5, -4, -4, 4, -2, 0, 4, 0, -2, 3, 1, -5, 0]));
