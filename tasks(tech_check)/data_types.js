// Task 1

let name = 'bob';
name[0] = 'B';
console.log(name);

// 'bob' - strings are immutable - we can access symbols, but not change them

[1, 2, 3].forEach((el, index, array) => {
  array = [];
  console.log(el);
});

// All loop will be completed successfully - array will not be overwrite

if (new Boolean(false)) {
  console.log(1);
}

// We'll get 1 in console

console.log(3 > 2 > 1);
// false -> (3>2) -> true > 1 -> false

// Temporary dead zones
let a = 1;

const myFunc = () => {
  console.log(a);

  let a = 2;

  return a + 3;
};

myFunc();

// Hoisting
console.log(a);

function a() {}

var a = 5;

//* BigInt * number - what happens?



