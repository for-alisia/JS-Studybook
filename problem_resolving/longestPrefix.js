var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return '';
  let right = 1;
  let prefix = '';

  let minStrL = Infinity;
  strs.forEach((str) => {
    minStrL = Math.min(minStrL, str.length);
  });

  while (right <= minStrL) {
    let current = strs[0].substring(0, right);
    let isValid = true;
    for (let i = 0; i < strs.length; i++) {
      if (strs[i].substring(0, right) !== current) {
        isValid = false;
        break;
      }
    }
    if (isValid) prefix = current;
    right++;
  }

  return prefix;
};

console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
console.log(longestCommonPrefix(['dog', 'racecar', 'car']));
console.log(longestCommonPrefix([]));
console.log(longestCommonPrefix(['dog']));
