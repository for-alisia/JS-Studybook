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
  let result = yield a; // yields a outside, wait for next next(arg) call with arg -> this arg will go to result
  if (result > a) {
    yield true;
  } else yield false;

  return a;
}

let generator1 = moreThen(5);
console.log(generator1.next()); // 5
console.log(generator1.next(7)); // true
console.log(generator1.next()); //5

// Errors
function* withError() {
  try {
    let result = yield '2+2=?';

    console.log(result);
  } catch (err) {
    console.log(err);
  }
}

const errGenerator = withError();
const question = errGenerator.next().value; // '2+2=?';
errGenerator.throw(new Error('Too complicated question'));

//? Async Iterators
// Without generator
// Locally keeping just ids => then iterate through object each time fetching the post
const posts = {
  ids: [1, 2, 3, 4, 5],
  [Symbol.asyncIterator]() {
    return {
      ids: this.ids,
      current: 0,

      async next() {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${this.ids[this.current]}`
        );
        const post = await response.json();

        if (this.current < this.ids.length) {
          this.current++;

          return { done: false, value: post };
        } else {
          return { done: true, value: post };
        }
      },
    };
  },
};

(async () => {
  for await (let post of posts) {
    console.log(post);
  }
})();
