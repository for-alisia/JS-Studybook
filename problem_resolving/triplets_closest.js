var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);
  console.log(nums);

  let minSum = nums[0] + nums[1] + nums[2];
  let maxSum = nums[nums.length - 1] + nums[nums.length - 2] + nums[nums.length - 3];

  if (target <= minSum) return minSum;
  if (target >= maxSum) return maxSum;

  let diff = Math.min(Math.abs(minSum - target), Math.abs(maxSum - target));
  let output = Math.abs(minSum - target) > Math.abs(maxSum - target) ? maxSum : minSum;

  for (let i = 0; i < nums.length; i++) {
    let lo = i + 1;
    let hi = nums.length - 1;

    while (lo < hi) {
      let currentSum = nums[i] + nums[lo] + nums[hi];
      if (Math.abs(currentSum - target) < diff) {
        diff = Math.abs(currentSum - target);
        output = currentSum;
      }
      if (currentSum < target) {
        lo++;
      } else {
        hi--;
      }
    }
  }

  return output;
};

console.log(threeSumClosest([0, 2, 1, -3], 1));
