var intToRoman = function (num) {
  let ones = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
  let tens = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC', 'C'];
  let hundereds = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM', 'M'];
  let thousands = ['', 'M', 'MM', 'MMM'];

  let i = 1;
  let roman = '';
  while (num) {
    let digit = num % 10;
    if (i === 1) {
      roman = ones[digit] + roman;
    }
    if (i === 2) {
      roman = tens[digit] + roman;
    }
    if (i === 3) {
      roman = hundereds[digit] + roman;
    }
    if (i === 4) {
      roman = thousands[digit] + roman;
    }
    i++;
    num = Math.floor(num / 10);
  }
  return roman;
};

console.log(intToRoman(1994));
console.log(intToRoman(94));
