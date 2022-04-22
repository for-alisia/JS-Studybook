// @ts-nocheck
/**
 * Symbol - primitive type in js. Doesn't convert to strings
 * Use if you need to protect some property in array
 * Don't iterate through for...in loop, but Object.assign will add symbol's properties
 */

// Creation
let idSymbol = Symbol('id'); // id - description
let newIdSymbol = Symbol('id');
idSymbol === newIdSymbol; // false
idSymbol.description; // id

// In object
const person = { name: 'Alex' };

person[idSymbol] = '12334'; // not person.idSymbol!

// Global symbols
let id = Symbol.for('id'); // if symbol doesn't exist it will be created
let anotherId = Symbol.for('id'); // get from global symbols

id === anotherId; // true

//let sym = Symbol.keyFor('id'); // global symbol id

/*************************************/
/**
 * USECASES FOR SOME SYSTEM SYMBOLS
 *
 * Symbol.toPrimitive
 */
// If we try to convert object to string, we'll get [Object Object]. Let's fix it
// Check this example in browser, please
const myPerson = {
  name: 'Alex',
  lastName: 'Doe',
  age: 30,
  [Symbol.toPrimitive](hint) {
    if (hint === 'string') {
      return `${this.name} ${this.lastName}`;
    } else {
      return this.age;
    }
  },
};

//alert(myPerson); // Alex Doe
//alert(+myPerson); // 30

// Another way to do it: create methods toString() and valueOf() - more older way to do import PropTypes from 'prop-types'

/**
 * Symbol.iterator
 *
 * Symbol.iterator => returns object, that contains next() method.
 * Next() returns an object: {value: ..., done: true or false}
 */

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

// Let's call the iterator
let iterator = range[Symbol.iterator]();
iterator.next(); // { done: false, value: 0}
