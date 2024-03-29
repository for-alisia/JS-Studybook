// Global context
// Each time on start execution JS engine creates a Global context with GlobalObject and "this"
// this === window (for global context)
// Adding variable to a global context it will be added as a property to global object
// (window for browser, global for node)

// Global execution context:
// 1. Creation phase (context + this + hoisting)
// 2. Execution phase (run your code)

var a = 'Hello';

console.log(window.a); // Hello

// Lexical Environment (Scope) - available data + variables where the function was defined
// Basicly where the code is written, at compile time

/**
 *  All declarations (function, var, let, const and class) are hoisted in JavaScript,
 *  while the var declarations are initialized with undefined,
 *  but let and const declarations remain uninitialized.
 */

function a() {}
function b() {
  function c() {}
}

// Hoisting
// Allocating space in memory heap on first run by engine
// Var variables are partically hoisted (only definition, not right part) - let and const are not hoisted!
// Functions are fully hoisted (can be used before definition) - only for functions declarations (not functions-expressions)
lexicalEnvironment = {
  teddy: undefined,
  some: function () {
    console.log('Hello');
  },
};

console.log(teddy); // undefined
console.log(some()); // Hello
console.log(another()); // Error: another is not defined (pay attention to the brackets in function definition)
// It prevents this finction (another) to hoist
console.log(name); // Error: name is not defined - let and const are not hoisted

var teddy = 'bear';
console.log(teddy); // bear

const name = 'Elena';

function some() {
  console.log('Hello');
}

(function another() {
  console.log('Opps');
});

// Example
console.log(a); // undefined (particular hoisting)
var a = 1;
var a = 2;

console.log(a); // 2

console.log(a1()); // not a1 (full hoisting) - the second definition will replace the first one

function a1() {
  console.log('a1');
}

console.log(a1()); // not a1 - function already hoisted fully, not matter where to put it

function a1() {
  console.log('not a1');
}

// Interview example
var food = 'milk';

function getFood() {
  console.log('Initial food is ' + food); // Initial food is undefined (local var food has hoisted with undefined val)

  var food = 'bread'; // If we will use const it will get an error - try to access const before definition - the name of const was hoisted, but not initialized with any value - “Temporal Dead Zone”

  console.log('Final food is ' + food); // Initial food is bread
}

getFood();

// Temporal Dead Zone (it's valid for let, const and class)

// Names of the variables (classes) are added to lexicalEnvironment, but they were not initialized,
// so you can not access them
lexicalEnvironment = {
  peter: undefined, // it's var :)
  myLet: notInitialized,
  Peter: notInitialized,
};

console.log(myLet); // Reference Error: cannot access before initialization
var peter = new Person('Peter'); // Reference Error: cannot access before initialization

let myLet = 'Hello';

class Person {
  constructor(name) {
    this.name = name;
  }
}

// Execution context - creates when function runs
// All execution contexts have arguments pseudo-array

// Arguments
// Arguments exist only in execution context (not in global - Reference error, if you try to access)
// If no args were passed to a function arguments will be {}

function sumTwoNums(a, b) {
  console.log(arguments); // { 0: 3, 1: 5 } - arguments (special keyword) iterable object, not Array!
  console.log(Array.from(arguments)); // [3,5] - we can convert arguments to an array
  return a + b;
}
sumTwoNums(3, 5);

// Rest parameters
// Let's look at the difference between rest parameters (ES6) and arguments
function mltNumbers(...args) {
  console.log(args); // [3, 5] - Rest parameters are array by default
  console.log(arguments); // { 0: 3, 1: 5 }

  return args[0] * args[1];
}
mltNumbers(3, 5);

// Variable environment
// Each execution context has it's variable environment - where it keeps all variables defined inside function
// Each function has a link to upper scope and to its variables - Scope chain
// When we try access variable (or function) inside a function:
// 1. JS engine checks in variable environment
// 2. If not there it goes to an upper scope and looks there
// 3. Repeats until find
// 4. If not found in all scopes -> Error
// It's a static scope - it means we are looking where the function was written in the code, not where it was called
// So for static scope there is no difference where the function in stack
// Scope defines accessibility of variables and functions
// Lexical Environment === [[ scope ]]
// In Chrome it can be checked (define function, check it -> [[Scopes]])

// Example
var x = 1;

function first() { // knows x and y no matter where we will call it
  var y = 2;

  fucntion second() { // knows q, x, y
    var q = 3;

    return q * 3;
  }
  
  return y * 2;
}

// Gotcha example

const hey = function bye() {
  // bye(); - 'Hey-bye' - the only place we can access bye
  console.log('Hey-bye');
}

hey(); // 'Hey-bye'
bye(); // Referrence error (bye is locked inside its own contaxt and can be accessed)