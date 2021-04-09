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

// Generators for iterable objects
const range = {
  from: 0,
  to: 4,
  *[Symbol.iterator]() {
    for (let i = this.from; i <= this.to; i++) {
      yield i;
    }
  },
};

console.log([...range]); // [0,1,2,3,4]

// Composition of the generators
function* generateSeq(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

function* generateCodes() {
  yield* generateSeq(3, 6);
  yield* generateSeq(9, 12);
  yield* generateSeq(15, 18);
}
// We don't need to collect the results of the generator, we can delegate through yield*

console.log([...generateCodes()]); //[3, 4, 5, 6, 9, 10, 11, 12, 15, 16, 17, 18];

// 2 way dirrections
function* moreThen(a) {
  let result = yield a;
  if (result > a) {
    yield true;
  } else yield false;

  return a;
}

let generator1 = moreThen(5);
console.log(generator1.next()); // 5
console.log(generator1.next(7)); // true
console.log(generator1.next()); //5
