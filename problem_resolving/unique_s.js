var lengthOfLongestSubstring = function (s) {
  let unique = [];
  let max = 0;

  for (let char of s) {
    if (unique.includes(char)) {
      max = Math.max(unique.length, max);
      let index = unique.indexOf(char);
      unique.splice(0, index + 1);
      unique.push(char);
    } else {
      unique.push(char);
    }
  }

  max = Math.max(max, unique.length);

  return max;
};

console.log(lengthOfLongestSubstring('dvdf'));
