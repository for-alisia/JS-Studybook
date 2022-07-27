// Iterable objects

// 1. We can use for..of loop
// 2. We can use spread operator
// 3. But they are not arrays and we can't use Array's methods with them

// Symbol-iterator task
// Simple object
const range = {
  from: 0,
  to: 10,
};

range[Symbol.iterator] = function () {
  return {
    current: this.from,
    to: this.to,
    next() {
      if (this.current > this.to) {
        return { done: true, value: this.to };
      } else {
        return { done: false, value: this.current++ };
      }
    },
  };
};

for (let val of range) {
  console.log(val); // 1,2,3,4,5,6,7,8,9,10
}

// OR with Generators
// The same example with generator:
const advancedRange = {
  from: 1,
  to: 10,
  *[Symbol.iterator]() {
    for (let i = this.from; i <= this.to; i++) {
      yield i;
    }
  },
};

[...advancedRange]; // 1,2,3,4,5,6,7,8,9,10

// Simple generator
function* gen() {
  let a = 0;

  while (a < 3) {
    yield a;
    a++;
  }

  return a;
}

let generator = gen();
generator.next(); // {value: 0, done: false}
generator.next(); // {value: 1, done: false}
generator.next(); // {value: 2, done: false}
generator.next(); // {value: 3, done: true}

// Generators are iterable
let generator2 = gen();
for (let val of generator2) {
  console.log(val); // 0,1,2 - the last value will not be shown - if we want to get it we should yield and not return it
}

// Let's spread generator
console.log([...gen()]); // [0,1,2]
