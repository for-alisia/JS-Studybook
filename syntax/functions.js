// In JS Functions are first class citizens
// Functions are special type of Objects

// Sudo code like example (doesn't work)
const someFn = {
  name: 'someFn',
  call: console.log('Hi'),
  arguments: [],
  apply() {},
  bind() {},
};

// Functions can be:
// 1. Assigned to a variables or object properties (methods)
// 2. Passed as an arguments
// 3. Returned as values from other function

// Closures
// 1. Memory efficient
// 2. Encapsulation

const mltBy = (a) => (b) => a * b;
const mltByTwo = mltBy(2);
const mltByTen = mltBy(10);

console.log(mltByTen(5)); // 50
mltBy(3)(7); // 21

const callMe = () => {
  setTimeout(() => console.log(hello), 3000);

  const hello = 'hello'; // no matter where the variable defined - via closure function will get it
};

callMe(); // hello

// Efficiency example
const havyFunc = (() => {
  const arr = new Array(7000).fill('a');
  console.log('created');
  return (idx) => arr[idx];
})();

console.log(havyFunc(345));
console.log(havyFunc(812));

// Only once called function
const init = (() => {
  let view;

  return () => {
    if (view) return view;

    view = 'view';
    console.log('View created ' + view);

    return view;
  };
})();

console.log(init());
console.log(init());

// Classic army of Functions
// Condition
var array = [1, 2, 3, 4];

for (var i = 0; i < array.length; i++) {
  setTimeout(() => console.log('I am element: ' + i), 0);
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
