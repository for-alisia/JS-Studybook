function naiveString1(str, val) {
  let start = 0;
  let end = val.length;
  let counter = 0;

  while (end <= str.length) {
    if (str.substring(start, end) === val) counter++;

    start = end;
    end = end + val.length;
  }

  return counter;
}

/** Nested Loops */
function naiveString(long, short) {
  let counter = 0;

  for (let i = 0; i < long.length; i++) {
    if (long[i] === short[0]) {
      for (let j = 0; j < short.length; j++) {
        if (long[i + j] !== short[j]) {
          break;
        }
        if (j === short.length - 1) counter++;
      }
    }
  }

  return counter;
}

console.log(naiveString('maomhgomgdtuomg', 'omg'));
