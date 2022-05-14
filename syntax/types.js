// JS is dynamicly weak typed language
// Passing by reference example
const obj1 = { id: 1 };
const obj2 = { id: 2 };

function change(obj1, obj2) {
  // Here obj1 and obj2 are not the same as outside (another references - lika p1 and p2)
  obj1 = obj2;
  obj2.id = 17;
  console.log(obj1.id); // 17
}

change(obj1, obj2);

console.log(obj1.id); // 1

// All types
// Primiyive types - pass by value
typeof 5; // number
typeof 'hello'; // string
typeof true; // boolean
typeof undefined; // undefined
typeof null; // object - JS error, should be null
typeof Symbol(); // Symbol
typeof 11111111111n; // bigint (new type in JS)

// Objects - pass by reference
typeof {}; // object
typeof []; // object
typeof function () {}; // function (in reality functions are objects)

// Object wrappers for primitives
console.log('hello'.toUpperCase()); // HELLO
// To call methods on primitives JS uses Object wrappers that cteates in runtime
var myNumber = new Number('5'); // Bad way to create variables, it's an object now, not primitive
var primNumber = 5;
var primNumber2 = 5;
console.log(myNumber === primNumber); // false - does not compare by value
console.log(primNumber === primNumber2); // true - primitives are compared by value

// Type Coercions
// Excellent table to play around https://dorey.github.io/JavaScript-Equality-Table/
// Coersion only works with ==, not ===
1 == '1'; // true - type coercion
1 === '1'; // false - no type coercion here (prefer to use this one)
// Object.is() works the same as ===, except 2 cases: +0 and -0, and NaN
Object.is('a', 'a'); // true

console.log('Tricky cases');
false == ''; // true
false == []; // true !
false == {}; // false
'' == 0; // true
'' == []; // true !
'' == {}; // false
0 == []; // true !
0 == {}; // false
0 == null; // false !

// Numbers
var a = 1; // Number
var b = 1.46; // Number

// Operations with Numbers
3 + 4; // 7
3 * 4; // 12
3 * 2 * 6; // 36
17 % 5; // 2 - (5*3) + 2

// Type coercion with Numbers
30 + '30'; // '3030' - goes to a string (plus here stands for concatination)
30 - '15'; // 15 - goes to a number ( - can't be used for a string)
'hello' - 'all'; // goes to NaN (- only for numbers!)

console.log(typeof NaN); // number - technically NaN is a number
console.log(isNaN('hello')); // true
console.log(isNaN(NaN)); // true
console.log(NaN === NaN); // False (NaN !== NaN) !!!
console.log(Number.isNaN('hello')); // false (it returns true only if value is NaN (without coercion to a number))
console.log(Number.isNaN('hello' - 'bye')); // true (we go to Number type with - operator)
// !!! Object.is(val1, val2) another way to compare, works as ===, except these cases:
+0 === -0; // true (but technically they are not equal)
Object.is(+0, -0); // false
Object.is(NaN, NaN); // true
NaN === NaN; // false
// !!!
