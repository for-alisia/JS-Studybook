// Knutt-Morris-Pratt
// O(n+m) - complexity

//// ????????????/ Watch later
function kmpSearch(str, pattern) {}

function patternTable(pattern) {
  const table = new Array(pattern.length);

  table[0] = 0;

  let start = 0;
  let end = 1;

  while (end < pattern.length) {
    if (pattern[start] !== pattern[end]) {
      if (table[start] !== 0) {
        start = table[start - 1];
        if (pattern[start] === pattern[end]) {
          table[end] = start + 1;
          start++;
        } else {
          table[end] = 0;
        }
      }
      end++;
    } else {
      table[end] = start + 1;
      start++;
      end++;
    }
  }

  return table;
}

console.log(patternTable('abcdabca'));
