function getRidOfSign(num) {
  const transformed = num.toString().substring(1);
  console.log(transformed);

  return parseInt(transformed);
}

function returnSign(num, isPositive) {
  if (isPositive) {
    return num;
  }

  const transformed = `-${num}`;

  return parseInt(transformed);
}

var divide = function (dividend, divisor) {
  let first = dividend;
  let second = divisor;
  let isPositive = true;

  if (dividend === 0 || divisor === 0) {
    return 0;
  }

  if (dividend < 0) {
    isPositive = !isPositive;
    first = getRidOfSign(dividend);
  }

  if (divisor < 0) {
    isPositive = !isPositive;
    second = getRidOfSign(divisor);
  }

  const initialArr = new Array(first);
  const bucket = [];

  while (initialArr.length) {
    const subBucket = [];

    for (let i = 0; i < second; i++) {
      if (initialArr.length) {
        subBucket.push(initialArr.pop());
      }
    }

    bucket.push(subBucket);
  }

  if (bucket[bucket.length - 1].length < second) {
    return returnSign(bucket.length - 1, isPositive);
  }

  return returnSign(bucket.length, isPositive);
};

console.log(divide(-2147483648, -1));
