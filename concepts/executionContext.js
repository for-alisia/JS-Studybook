// Global context
// Each time on start execution JS engine creates a Global context with GlobalObject and "this"
// this === window (for global context)
// Adding variable to a global context it will be added as a property to global object
// (window for browser, global for node)

var a = 'Hello';

console.log(window.a); // Hello

// Lexical Environment (Scope) - available data + variables where the function was defined
// Basicly where the code is written, at compile time,

function a() {}
function b() {
  function c() {}
}

// Hoisting
// Var variables are partically hoisted (only definition, not right part) - let and const are not hoisted!
// Functions are fully hoisted (can be used before definition)
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
