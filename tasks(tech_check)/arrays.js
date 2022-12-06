// map + parseInt
const numbers = ['1', '1', '1'].map(parseInt);

console.log(numbers);
// [1, NaN, 1]
// parseInt will get 2 args element and it's index ->
// parseint('1', 0) will go to 1 (0 as a radix is the same as not provided radix)
// parseInt('1', 1) will go to NaN (1 as a radix is not valid - only numbers from 2 to 36 (plus 0 as default 10))
// parseInt('1', 2) will go to 1 (as with radix = 2 1 is still 1)
