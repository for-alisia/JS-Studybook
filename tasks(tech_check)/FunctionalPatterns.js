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
console.log(count()); // 3

// Hoisting/closures
// Task - what will we have in console in 1 sec
// no matter where the variable defined - via closure function will get it
const callMe = () => {
  setTimeout(() => console.log(hello), 1000);

  const hello = 'hello';
};

callMe();

// Immediate invoked + only once called
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

// Closures
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

// Curring
// Task - create a curring function from usual one
function mltpG(a, b, c) {
  return a * b * c;
}

// Solution
const mltpCurry = (a) => (b) => (c) => a * b * c;

console.log(mltpG(2, 3, 4)); // 24
console.log(mltpCurry(2)(3)(4)); // 24

//Memoization (caching)
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

  return (n) => {
    if (cache[n]) {
      return cache[n];
    }

    cache[n] = fn(n);
    return cache[n];
  };
};

const memoiedHardCompute = memo(hardCompute);

// Binding (with call);
// Task - create function that will return that output for any amount of argumnets.
// Condition - to use arguments
exclamation(1, 2, 3, 4, 5); // 1!, 2!, 3!, 4!, 5!

function exclamation() {
  return Array.prototype.map.call(arguments, (arg) => `${arg}!`);
}

console.log(exclamation(1, 2, 3, 4, 5));
