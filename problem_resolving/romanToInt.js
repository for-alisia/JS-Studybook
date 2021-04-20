var romanToInt = function (s) {
  let result = 0;

  let roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  for (let i = 0; i < s.length; i++) {
    let current = s[i];
    let next = s[i + 1];

    if (roman[current] >= roman[next] || i === s.length - 1) {
      result += roman[current];
    } else {
      result -= roman[current];
    }
    console.log(i, result);
  }

  return result;
};

console.log(romanToInt('MCMXCIV')); // 1994
console.log(romanToInt('LVIII')); // 58
