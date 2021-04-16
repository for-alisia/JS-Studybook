var reverse = function (x) {
  let absNumber = Math.abs(x);
  let digitsReverse = +absNumber.toString().split('').reverse().join('');
  if (x < 0) digitsReverse *= -1;

  if (digitsReverse > 2 ** 31 - 1 || digitsReverse < (-2) ** 31) return 0;

  return digitsReverse;
};

console.log(reverse(1534236469));
