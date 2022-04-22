var multiply = function (num1, num2) {
  const tnum1 = +num1;
  const tnum2 = +num2;

  return (tnum1 * tnum2).toString();
};

console.log(multiply('2', '3')); // "6";
console.log(multiply('123', '456')); // "56088"
