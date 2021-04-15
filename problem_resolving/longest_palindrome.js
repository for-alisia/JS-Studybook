var longestPalindrome = function (s) {
  let maxLength = 0;
  let maxPalindrome;

  for (let j = 0; j < s.length; j++) {
    for (let i = s.length; i > j; i--) {
      let substr = s.substring(j, i);
      console.log(substr, i, j);

      if (checkPalindrome(substr) && maxLength < substr.length) {
        maxLength = substr.length;
        maxPalindrome = substr;
      }
    }
  }

  return maxPalindrome;
};

function checkPalindrome(s) {
  let isPalindrome = true;

  for (let i = 0; i < s.length / 2; i++) {
    if (s[i] !== s[s.length - 1 - i]) {
      isPalindrome = false;
      break;
    }
  }

  return isPalindrome;
}

console.log(longestPalindrome('cabac'));
