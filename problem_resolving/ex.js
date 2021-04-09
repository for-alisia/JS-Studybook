function charCount(str) {
  const chars = {};

  str
    .toLowerCase()
    .split('')
    .forEach((char) => {
      const uni = char.charCodeAt(0);
      if ((uni > 48 && uni < 57) || (uni > 97 && uni < 122)) {
        chars[char] > 0 ? chars[char]++ : (chars[char] = 1);
      }
      return;
    });

  return chars;
}

/***************************/

function charCount2(str) {
  const chars = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();

    if (/[a-z0-9]/.test(char)) {
      chars[char] > 0 ? chars[char]++ : (chars[char] = 1);
    }
  }

  return chars;
}

/***************************/

function charCount3(str) {
  const chars = {};

  for (let char of str.toLowerCase()) {
    if (/[a-z0-9]/.test(char)) {
      chars[char] ? chars[char]++ : (chars[char] = 1);
    }
  }

  return chars;
}

/***************************/

function charCount4(str) {
  const chars = {};

  for (let char of str) {
    if (isAlphNumeric(char)) {
      char = char.toLowerCase();
      chars[char] ? chars[char]++ : (chars[char] = 1);
    }
  }

  return chars;
}

function isAlphNumeric(char) {
  const code = char.charCodeAt(0);

  if (!(code > 47 && code < 58) && !(code > 64 && code < 91) && !(code > 96 && code < 123)) {
    return false;
  }

  return true;
}

console.log(charCount4('hello111$%%$ Hi guys there 123'));
