// This in JS is dynamically scoped - except arrow functions - they make this lexically scoped

function a() {
  console.log({ thisA: this }); // Window (in browser of course)
}
a();

function b() {
  'use strict';
  console.log({ thisB: this }); // undefined
}
b();

const expression = function () {
  console.log({ thisExpression: this }); // Window
};
expression();

const arrow = () => console.log({ thisArrow: this }); // Window
arrow();

const obj = {
  name: 'Alla',
  great() {
    console.log({ thisObj: this }); // obj
  },
};

obj.great();

// Example
function example() {
  console.log({ exampleThis: this }); // Window

  function inner() {
    console.log({ innerThis: this }); // Window

    const innerObj = {
      hi: function () {
        console.log({ innerObjThis: this }); // innerObj
      },
    };

    innerObj.hi();
  }

  inner();
}

example();

// Nested method
const person = {
  name: 'John',
  say() {
    console.log('method', this); // person
    const methodFunc = function () {
      console.log('methodFunc', this); // Window
    };

    const methodArr = () => {
      console.log('methodArr', this); // person
    };

    const self = this; // let's keep this as variable and reuse it inside a function
    const oneMoreInner = function () {
      console.log('oneMoreInner', self); // person
    };

    methodFunc();
    methodArr();
    oneMoreInner();
  },
};

person.say();

// Call, bind and apply
function test() {
  console.log('It is a test');
}

test.call(); // It is a test - just invoke a function
test.apply(); // It is a test

const hero = {
  name: 'Adam',
  health: 100,
  heal(points, thanks) {
    this.health += points;
    console.log(thanks);
  },
};

const pet = {
  name: 'Saddy',
  health: 10,
};

// Call
hero.heal.call(pet, 20, 'Thank you hero'); // take a method from one object and call it for another
console.log(pet); // { name: 'Saddy', health: 30 }

// Apply difference - it accepts array of parameters
// hero.heal.call(pet, [20, 'Thank you hero']);

// Bind
const healPet = hero.heal.bind(pet, 10); // Parameters can be passed separately
healPet('I am good!'); // 'I am good!'

console.log(pet); // { name: 'Saddy', health: 40 }

// My bind implementation (skeleton)
Function.prototype.myBind = function (ref, ...args) {
  const fn = this;
  return function () {
    fn.call(ref, ...args);
  };
};

const testMyBind = {
  name: 'Anna',
  surname: 'Doe',
};
const greatMe = function (city, country) {
  console.log(`Hi, ${this.name} ${this.surname}. Welcome to ${city}, ${country}`);
};

const withMyBind = greatMe.myBind(testMyBind, 'Karkow', 'Poland');
withMyBind();

// 4 ways of this
// 1. With new keyword
function Elf(name, weapon) {
  this.name = name;
  this.weapon = weapon;
}

const addy = new Elf('addy', 'bow');

// 2. Implicit binding
const student = {
  name: 'Alice',
  age: 18,
  haveBirthday() {
    this.age += 1;
  },
};

// 3. Explicit binding
// Bind, call and apply
// See examples above

// 4. Arrow functions - lexically scoped this

// Global this (added ES2020)
globalThis; // window in browser and global in Node
