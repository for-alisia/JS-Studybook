const analyzeIfArrayCanBeSplitIntoEqualSumLeftRight = (input) => {
  let isEqual = false;

  const totalSum = input.reduce((acc, el) => acc + el, 0);
  let current = 0;
  for (let i = 0; i < input.length; i++) {
    current += input[i];
    if (current === totalSum - current) {
      return true;
    }
  }

  return isEqual;
};

console.log(analyzeIfArrayCanBeSplitIntoEqualSumLeftRight([1, 2, 2, 3]));
