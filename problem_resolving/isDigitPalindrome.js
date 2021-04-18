var isPalindrome1 = function (x) {
  if (x < 0) return false;

  let isPalindrome = true;

  const xStr = x.toString();

  const length = xStr.length;

  for (let i = 0; i < length / 2; i++) {
    if (xStr[i] !== xStr[length - 1 - i]) {
      isPalindrome = false;
      break;
    }
  }

  return isPalindrome;
};

var isPalindrome = function (x) {
  if (x < 0) return false;

  let isPalindrome = true;
  let digits = [];

  while (x >= 1) {
    digits.push(Math.floor(x % 10));
    x /= 10;
  }

  console.log(digits);
  for (let i = 0; i < digits.length; i++) {
    if (digits[i] !== digits[digits.length - 1 - i]) {
      isPalindrome = false;
      break;
    }
  }

  return isPalindrome;
};

console.log(isPalindrome(10));
