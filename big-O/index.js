// Time Complexety and Space Complexety
// O(1), O(logN), O(N), O(N*log(N)) - fast (from the fastet to the slowest)
// O(N*N) - slow (try to avoid this type of complexity)

// 2 nested loops - classic example of O(n*n) time complexity in general

// The amount of operations depends on n - slower, then the example below
function addUpTo(n) {
  let total = 0;

  for (let i = 1; i <= n; i++) {
    total += i;
  }

  return total;
}

// Only 3 operations - no influence of n - fast
function addUpToF(n) {
  return (n * (n + 1)) / 2;
}

// Get time - not always the efficient way to understand the time complexity
const start = new Date().getTime();
addUpToF(100000000);
const end = new Date().getTime();

console.log((end - start) / 1000);

//console.log(addUpTo(6));
//console.log(addUpToF(6));
