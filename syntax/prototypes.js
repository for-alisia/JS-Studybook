const lizard = {
  name: 'Sally',
  health: 10,
  fight() {
    return 5;
  },
  heal() {
    this.health += 10;
    console.log('Ahhhh');
  },
};

const dragon = {
  name: 'Olex',
  health: 100,
  fight() {
    return 10;
  },
};

dragon.__proto__ = lizard; // NEVER use it (just for demo here)
dragon.heal(); // Ahhhh
lizard.__proto__; // Object {}
lizard.__proto__.__proto__; // null

console.log(lizard.isPrototypeOf(dragon)); // true

for (let prop in dragon) {
  // All properties
  console.log(prop); //name, health, fight, heal - dragon has it's own properties and properties from lizard
  // Own properties
  if (dragon.hasOwnProperty(prop)) {
    console.log('OWN: ' + prop); // name, health, fight
  }
}

function test() {}
const testObj = {};

test.hasOwnProperty('call'); // false
test.__proto__.hasOwnProperty('call'); // true - Function
test.__proto__.__proto__.hasOwnProperty('hasOwnProperty'); // true - Object
Function.prototype === test.__proto__; // true
Object.prototype === testObj.__proto__; // true

// Inheritance

// Primitive example
const animal = {
  alive: true,
};

const dog = Object.create(animal);
dog.legs = 4;
console.log(dog); // { legs: 4 }
console.log(dog.alive); // true
animal.isPrototypeOf(dog); // true

// Only functions have prototype hasOwnProperty
console.log(test.prototype);

// Classic old "a-la" classes
// Constructor of a class
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Add method to a class
Person.prototype.changeName = function (newName) {
  this.name = newName;
};

// Create an instance of a class
const peter = new Person('Peter', 22);

console.log(peter);

// Call methd on an instance
peter.changeName('Peter Pen');

console.log(peter);

// Creating child class extending from Person
function Developer(name, age, lang) {
  Person.call(this, name, age);
  this.lang = lang;
}

// Set links to methods
Object.setPrototypeOf(Developer.prototype, Person.prototype);

const olivia = new Developer('Olivia', 18, 'JS');
console.log(olivia);
olivia.changeName('Olivia Doe');
console.log(olivia);

// Adding method to existing Object
Date.prototype.lastYear = function () {
  return this.getFullYear() - 1;
};

new Date('1900-10-10').lastYear();

// Modifying existing method
Array.prototype.map = function () {
  const newArr = [];

  this.forEach((el) => newArr.push(`${el} !!!`));

  return newArr;
};

const arr2 = [1, 2, 3];
arr2.map();

// Re-create bind
Function.prototype.bind = function (that) {
  const fn = this;
  return function () {
    fn.apply(that, arguments);
  };
};
