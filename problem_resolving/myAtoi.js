var myAtoi = function (s) {
  let str = s.trim();
  let mltp = 1;
  let digitStr = '';

  console.log(str);

  for (let i = 0; i < str.length; i++) {
    if (i === 0 && str[i] === '-') {
      mltp = -1;
      continue;
    }

    if (i === 0 && str[i] === '+') {
      continue;
    }

    if (!isNaN(+str[i]) && str[i] !== ' ') {
      digitStr += str[i];
    } else {
      break;
    }
  }

  let result = +digitStr * mltp;

  return result;
};

console.log(myAtoi('   +0 123'));
