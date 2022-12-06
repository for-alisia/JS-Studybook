// Prototypal inheritance
function User() {
  this.verified = true;
}

const user = new User();
const admin = Object.create(user);
const clone1 = { ...admin };
const clone2 = Object.assign({}, admin);

console.log(user.verified, admin.verified, clone1.verified, clone2.verified);

// true, true, undefined, undefined
// admin has a prototype set to user (because we used Object.create - verified does not exist on admin, only on it's prototype),
// but clones do not have it, as spread operator and Object.assign do not copy prototype

// Promotives vs Objects
const str1 = 'Hello';
const str2 = String('Hi');
const str3 = new String('Good day');

console.log(str1 instanceof String);
console.log(str2 instanceof String);
console.log(str3 instanceof String);

// false, false, true
// primitive, primitive, object
// Calling construstor String without a wrapper returns a primitive
// and instanceof can be used only with objects

// This context
const obj1 = {
  bar: 100,
  foo() {
    return () => this.bar;
  },
};

const myFoo = obj1.foo;
const myFooNext = obj1.foo();

console.log(myFoo.call({ bar: 500 })());
console.log(myFooNext.call({ bar: 500 }));
console.log(myFoo().call({ bar: 500 }));

// Arrow function does not have it's own context (staticly scoped)
// First case: myFoo - normal function copied from original object, with call we provide new context - 500
// Second case: myFooNext - arrow function, it uses context from parent (obj1), call is not applied to arrow func - 100
// Third case: myFoo() like this has global context (looses context as normal func),
// it returns arrow func (no own context, but paren't context is global one)
// call doesn't affect arrow func - undefined (global context doesn't have bar)

function User(name) {
  this.name = 'Anna';

  return {
    name,
    getName: () => this.name,
  };
}

const user = new User('John');

console.log(user.getName());
console.log(user.name);

// Anna, John
