var isMatch = function (s, p) {
  const sLen = s.length;
  const pLen = p.length;
  const map = new Map();

  return check(0, 0);

  function check(idxS, idxP) {
    const key = idxS + ':' + idxP;

    if (map.has(key)) return map.get(key);
    if (idxS > sLen) return false;
    if (idxS === sLen && idxP === pLen) return true;

    const currMatch = p[idxP] === '.' || p[idxP] === s[idxS];

    if (p[idxP + 1] === '*') {
      const skipCurr = check(idxS, idxP + 2);
      const currMatchMultiple = currMatch && check(idxS + 1, idxP);

      map.set(key, skipCurr || currMatchMultiple);
    } else {
      const matchNext = check(idxS + 1, idxP + 1);

      map.set(key, currMatch && matchNext);
    }

    return map.get(key);
  }
};

console.log(isMatch('aab', 'c*a*b')); // true
console.log(isMatch('aa', 'a')); // false
console.log(isMatch('aa', 'a*')); // true
console.log(isMatch('ab', '.*')); // true
console.log(isMatch('abcd', 'a.cd')); //true
console.log(isMatch('aabbccdd', 'a*.*ccdd')); //true
