var convert = function (s, numRows) {
  let arr = new Array(numRows);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = s[i];
  }

  console.log(arr);
};

console.log(convert('PAYPALISHIRING', 3));
