var convert = function (s, numRows) {
  if (numRows < 2) return s;

  let result = Array.from({ length: numRows }, () => '');
  let resStr = '';

  let i = 0;

  while (i !== s.length) {
    let j = 0;

    while (j !== numRows && i !== s.length) {
      result[j] += s[i];
      j++;
      i++;
    }

    j = numRows - 2;
    while (j !== 0 && i !== s.length) {
      result[j] += s[i];
      j--;
      i++;
    }
  }

  for (let arr of result) {
    resStr += arr;
  }

  return resStr;
};

console.log(convert('PAYPALISHIRING', 3));
