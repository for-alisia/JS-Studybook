// Functions
//? Creation - How we can create function in JS?
// Function declaration
// Function Expression
// Arrow Function
// new Function(arg1, arg2, arg3, bodyOfFn); - do not have access to local scopes, only to global one - no closures

//? Built in function properties
const some = function (a, b) {};

console.log(some.name);
console.log(some.length);
// Consoles: some, 2
// Can we change the name by setting it? - No
// If we have internal name (for FE) what should be a name? - Internal one

//? Default parameters (correct answer - 1, optional parameter and all parameters after optional are not considered as formal)
function withDefaultParam(a, b = 10, c) {
  console.log(withDefaultParam.length);
}

withDefaultParam(1, 2, 3);

//? Rest operator
function sum() {}

console.log(sum(1, 2, 3, 4, 5));

// ...args - rest operator - array
// arguments - iterable object (do not exist in Arrow functions)
// Re-write an example with arguments instead of args
// Ask about difference of bind, call and apply

// Topics to cover
// Functional patterns - (immediate, callback, memoization, chaining, binding);

//? Closures
// Create count function that will return next number each call

// solution
const count = (() => {
  let counter = 0;

  return () => counter++;
})();

console.log(count()); // 0
console.log(count()); // 1
console.log(count()); // 2

// What will be in a console
function abc() {
  let val = 11;

  const myFunc = new Function('return val');

  return myFunc;
}

abc()();
// ReferenceError - function created via new Function have link only to global scope

// Hoisting/closures
// Task - what will we have in console in 1 sec
// no matter where the variable defined - via closure function will get it
const callMe = () => {
  setTimeout(() => console.log(hello), 1000);

  const hello = 'hello';
};

callMe();

//? Immediate invoked + only once called
// Only once called function
// Task - to create function that will be called once

// Solution
const init = (() => {
  let view;

  return () => {
    if (view) return view;

    view = { init: true };
    console.log('View created ' + view);

    return view;
  };
})();

// Task
const inited = init(); // { init: true };
const inited2 = init();
console.log(inited === inited2);

//? Closures
// Classic army of Functions
// Condition
var array = [1, 2, 3, 4];

for (var i = 0; i < array.length; i++) {
  setTimeout(() => console.log(i), 0);
}

// Solution 1
for (let i = 0; i < array.length; i++) {
  setTimeout(() => console.log('I. I am element: ' + i), 0); // let will keep it's own value on each iteration (block scope)
}

//Solution 2
for (var i = 0; i < array.length; i++) {
  const print = (idx) => console.log('II. I am element: ' + idx);

  setTimeout(print.bind(undefined, i), 0); // Bind will pass correct arg
}

// Solution 3
for (var i = 0; i < array.length; i++) {
  (function (i) {
    setTimeout(() => console.log('III. I am element: ' + i), 0); // we are using closures here - i go through the args
  })(i);
}

//? Curring
// Task - create a curring function from usual one
function mltpG(a, b, c) {
  return a * b * c;
}

// Solution
const mltpCurry = (a) => (b) => (c) => a * b * c;

console.log(mltpG(2, 3, 4)); // 24
console.log(mltpCurry(2)(3)(4)); // 24

//? Memoization (caching)
// task - we have some hardCompute function that takes long time to run. Create caching version
function hardCompute(n) {
  return n + 100; // Let's imagine it's a long operation here
}

// Not generic solution
let cache = {};

const memoHardCompute = (n) => {
  if (cache[n]) {
    return cache[n];
  }

  cache[n] = hardCompute(n);
  return cache[n];
};

// Memoization + callback
// More generic way without pollution global scope
const memo = (fn) => {
  const cache = {};

  return function (n) {
    if (cache[n]) {
      return cache[n];
    }
    cache[n] = fn.call(this, n);
    return cache[n];
  };
};

const memoiedHardCompute = memo(hardCompute);

// How we need to modify memo to make it work with methods? (fn.call(this, n) + returning function should not be an arrow to keep this)
const myObj = {
  some() {
    return 3;
  },

  hard(n) {
    return n + this.some();
  },
};

myObj.hard = memo(myObj.hard);

console.log('---');
console.log(myObj.hard(4));
