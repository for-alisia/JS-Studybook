// Functional Programming

// Example of a simple cart with FP principles (immutability, pure functions, composition)
const user = {
  name: 'Kim',
  active: true,
  cart: [],
  purchases: [],
  history: [],
};

const flow =
  (...fns) =>
  (...data) => {
    return fns.reduce((prev, fn) => {
      console.log(prev);
      const result = fn(...prev);
      console.log(result);
      return fn(...prev);
    }, data);
  };

const itemWithTax = (item) => ({ ...item, priceWithTax: item.price * 1.03 });

const addItemToTheCart = (user, item) => {
  return [
    {
      ...user,
      cart: [...user.cart, itemWithTax(item)],
      history: [...user.history, { action: 'addItem', item }],
    },
    item,
  ];
};

const buyAnItemFromCart = (user, item) => {
  return [
    {
      ...user,
      cart: user.cart.filter((name) => name !== item.name),
      purchases: [...user.purchases, item],
      history: [...user.history, { action: 'buyItem', item }],
    },
    item,
  ];
};

const emptyCart = (user, item) => {
  return [
    {
      ...user,
      cart: [],
      history: [...user.history, { action: 'emptyCart' }],
    },
    item,
  ];
};

const purchaseItem = flow(addItemToTheCart, buyAnItemFromCart, emptyCart);

console.log(purchaseItem(user, { name: 'laptop', price: 299 }));

// Perfect function should:
// 1. Do only 1 task
// 2. Have a return statement
// 3. Be pure
// 4. Not have shared state
// 5. Immutable state
// 6. Be composable
// 7. Be predictable

// Main Pillars for Functional Programming
// I. Pure functions
// No side effects - the same input -> the same output - Referecial transparency
// Function should not modify smth outside (ex. modifying an array) - no shared state

function a() {
  console.log('history'); // Not a pure functions - uses browser API
}

function b(arr) {
  return [...arr, 'hi']; // Pure function - not modify, but copyng array
}

function c(num) {
  return num * 2; // Pure function - Referencial transparency
}

// II. Idempotence - the same result on multiple calls (not as pure, see example)

const idempontance = (num) => {
  return console.log(num); // Not pure (has side effect), but idempotence
};

const notIdempotence = (num) => {
  return Math.random(num); // Not idempotence - different output on each call
};

// Ability to call itself inside multiple times with the same result
Math.abs(Math.abs(-50)); // 50

// III Imperative vs Declarative

// More imperative (a lot instructions)
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// More declarative - we describe what we want to do on each element and not to how to do it
[1, 2, 3, 4, 5].forEach((item) => console.log(item));

// JQuery - imperative, React - declarative

// IV Immutability

const girl = {
  name: 'Anna',
  age: 12,
};

girl.name = 'Anna Dwordzecki'; // we mutate an object

function changeName(person, newName) {
  // not mutate original object, but return new object
  return {
    ...person,
    name: newName,
  };
}

console.log(changeName(girl, 'Anna Doe')); // return new object with new name
console.log(girl); // it keeps old name

// Functional Programming Techniques
// 1. Currying

// Example
function mltpG(a, b, c) {
  return a * b * c;
}

console.log(mltpG(2, 3, 4)); // 24

// Let's currying this function
const mltpCurry = (a) => (b) => (c) => a * b * c;

console.log(mltpCurry(2)(3)(4)); // 24

// 2. Partial Application
// With currying we expect one parameter at a time, with partial application - the rest on the second call

const mltpPartialBy5 = mltpG.bind(null, 5);
console.log(mltpPartialBy5); // 150

// 3. Memoization (caching)

function hardCompute(n) {
  console.log('Doing smth expensive...');
  return n + 100; // Let's imagine it's a long operation here
}

let cache = {};

const memoHardCompute = (n) => {
  if (cache[n]) {
    return cache[n];
  }

  cache[n] = hardCompute(n);
  return cache[n];
};

// We'll have only 2 calls for all this lines - for 10 and for 20
memoHardCompute(10);
memoHardCompute(20);
memoHardCompute(10);
memoHardCompute(20);

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

// 4. Composition

// Many libraries already have compose function, but let's create our own primitive version
const compose = (fn1, fn2) => (data) => fn1(fn2(data));

const addTo100 = (n) => n + 100;
const square = (n) => n * n;

const add100AndSquare = compose(square, addTo100);

add100AndSquare(5); // 11025 (100 + 5)*(100 + 5)

// Functions should be pure to be composable
// Pipe is the same as compose but it goes from right to left

const pipe = (fn1, fn2) => (data) => fn2(fn1(data));

const squareAndAdd100 = pipe(square, addTo100);

squareAndAdd100(5); // 125 -  (5 * 5) + 100

// ariry - number of parameters - the less parameters the function has the better

// FP vs OOP

// Cons of OOP: Inheritence what it is
// Tight coupling,
// Fragile base class problem (any change in base class affects it's children)
// Hierarchy - can has negative effect when it should be changed at one point of time or when child class doesn't need all functionality of upper classes

// Let's describe Characters class with FP principeles

// Please use some compose from a library, it's just a simpliest example here
const simpleCompose = (fn1, fn2) => (data) => fn1(fn2(data));

// Functions to create methods for our characters
function getAttack(character) {
  return {
    ...character,
    attack() {
      return `${this.name} attacks with a ${this.weapon}`;
    },
  };
}

function getSleep(character) {
  return {
    ...character,
    sleep() {
      return `${this.name} is going to bed`;
    },
  };
}

// Here we will use closure to keep only one var with make fort function in memory, but not in global scope
function getMakeFort() {
  function makeFort() {
    return `${this.name} made a fort`;
  }

  return (character) => {
    return { ...character, makeFort };
  };
}

// Functions to create characters (we can pass them methods through compose)
function elf(name, weapon) {
  const elf = {
    name,
    weapon,
  };

  return simpleCompose(getAttack, getSleep)(elf);
}

function ogre(name, weapon) {
  const ogre = { name, weapon };

  return simpleCompose(getAttack, getMakeFort())(ogre);
}

// Create characters
const ariel = elf('ariel', 'water');

console.log(ariel.attack()); // ariel attacks with a water

const shrek = ogre('shrek', 'stone');

console.log(shrek.makeFort());
