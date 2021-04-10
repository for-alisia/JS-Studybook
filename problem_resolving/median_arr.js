var findMedianSortedArrays = function (nums1, nums2) {
  let i = 0;
  let j = 0;
  let median;
  const mergedArr = [];

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] <= nums2[j]) {
      mergedArr.push(nums1[i]);
      i++;
    } else {
      mergedArr.push(nums2[j]);
      j++;
    }
  }

  if (j < nums2.length) {
    for (j; j < nums2.length; j++) {
      mergedArr.push(nums2[j]);
    }
  }

  if (i < nums1.length) {
    for (i; i < nums1.length; i++) {
      mergedArr.push(nums1[i]);
    }
  }

  console.log(mergedArr);

  if (mergedArr.length % 2 === 0) {
    median = (mergedArr[mergedArr.length / 2] + mergedArr[mergedArr.length / 2 - 1]) / 2;
  } else {
    median = mergedArr[Math.floor(mergedArr.length / 2)];
  }

  return median;
};

console.log(findMedianSortedArrays([2], [1, 3]));
