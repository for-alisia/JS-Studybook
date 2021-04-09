/* Recursion - function calls itself. Fut always we need to have a condition to stop. 

*/

function counDown(num) {
  if (num <= 0) {
    console.log('done');
    return;
  }
  if (num > 0) {
    console.log(num);
    num--;
    counDown(num);
  }
}

//counDown(5);

// Summ from 1 to num
function summFromOne(num) {
  if (num === 1) return 1;
  return num + summFromOne(num - 1);
}

//console.log(summFromOne(6));

const fuctorial = (num) => (num === 1 ? 1 : num * fuctorial(num - 1));

// console.log(fuctorial(3));

/** Recursions with a helper method - we need to collect some data
 * (in this example we need to collect the array of numbers) - so
 * we need to set this var outside the recursive function */
function collectOddValues1(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) return;

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }

    helper(helperInput.slice(1));
  }

  helper(arr);

  return result;
}

/** The same example with pure recursion */
function collectOddValues(arr) {
  let newArr = [];

  if (arr.length === 0) return newArr;

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddValues(arr.slice(1)));

  return newArr;
}

//console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// Exponential
const power = (base, exp) => (exp === 0 ? 1 : base * power(base, exp - 1));

//console.log(power(2, 4));

// Fibonacci - my solution
function fib1(num) {
  if (num < 3) return 1;

  let r1 = 2;
  let r2 = 1;

  function helper(input) {
    if (input === num) return;

    let temp = r1;
    r1 = r1 + r2;
    r2 = temp;

    helper(++input);
  }

  helper(3);
  return r1;
}

// Fibonaccii - wright solution
function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

//console.log(fib(35));

function reverse(str) {
  if (str.length === 0) return '';
  return '' + reverse(str.substr(1)) + str[0];
}

//console.log(reverse('awesome'));

function isPalindrome(str) {
  let isTrue = true;

  function helper(input) {
    if (input.length <= 1) return;

    if (input[0] !== input[input.length - 1]) {
      isTrue = false;
      return;
    } else {
      helper(input.substring(1, input.length - 1));
    }
  }

  helper(str);

  return isTrue;
}

//console.log(isPalindrome('tacocat'));

function someRecursive(arr, cb) {
  let isTrue = false;

  function helper(input) {
    if (input.length === 0) return;

    if (cb(input[0])) {
      isTrue = true;
      return;
    } else {
      helper(input.slice(1));
    }
  }

  helper(arr);

  return isTrue;
}

const isOdd = (val) => val % 2 !== 0;

//console.log(someRecursive([2, 4], isOdd));

function flatten(arr) {
  let result = [];

  function helper(input) {
    if (!Array.isArray(input)) {
      result.push(input);
      return;
    }

    if (input.length === 0) {
      return;
    }

    input.forEach((el) => helper(el));
  }

  arr.forEach((el) => helper(el));

  return result;
}

console.log(flatten([1, [2, 3], [4, [5, 6, [7], []]]]));
