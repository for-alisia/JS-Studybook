// Let's got to the OOP concepts step by step

// Step 1
// Factory functions - functions that create objects
// Issue here - all methods will be copied from object to object - leak of the memory
function createElf(name, weapon) {
  return {
    name,
    weapon,
    attack() {
      return `${name} attacks with ${weapon}`;
    },
  };
}

const peter = createElf('peter', 'sword');
peter.attack();

// Step 2
// Let's remove common functions to another object and improve the code

const elfStore = {
  attack() {
    return `${this.name} attacks with ${this.weapon}`;
  },
};

function createElf2(name, weapon) {
  let newElf = Object.create(elfStore); // Create a link to elfStore (it will be set to __proto__) - prototypal inheritance
  newElf.name = name;
  newElf.weapon = weapon;

  return newElf;
}

const sam = createElf2('Sam', 'fire');
sam.attack();

console.log(sam.__proto__); // elfStore Object

// Step 3
// Constructor function
function Elf(name, weapon) {
  this.name = name;
  this.weapon = weapon;
}

Elf.prototype.attack = function () {
  // Do not use arrow functions here - we need dynamically scoped this
  return `${this.name} attacks with ${this.weapon}`;
};

const adam = new Elf('Adam', 'sword');
adam.attack();

//! Attention!
Elf.prototype.changeName = function (newName) {
  const self = this; // If you need to use this inside other function - bind, self or arrow function

  function getNewName() {
    return self.name + newName;
  }

  const useless = () => {
    console.log(this); // It will work fine
  };

  useless();

  return getNewName();
};

adam.changeName('Adam Pro');

// Step 4 - Classes (ES6+);

class Wizard {
  health = 100;

  constructor(name, power) {
    this.name = name;
    this.power = power;
  }

  attack() {
    return `${this.name} attacked with ${this.power}`;
  }
}

const merlin = new Wizard('Merlin', 'fire');
console.log(merlin instanceof Wizard);
merlin.attack();

// Inheritance with classes
const newMerlin = { ...merlin }; //! It will copy properties, but looses the prototype chain!!!

// Without ES6 we need to link parent and child constructor functions through sePrototypeOf
// Object.setPrototypeOf(Developer.prototype, Person.prototype);  // first param is a child, second is a parent
// And use Parent.call(this, otherArgs) in constructor of a child
// For an example - look in prototypes snippet

class Healer extends Wizard {
  constructor(name, power, healing) {
    //* If there are no changes in constructor - it can be skipped at all
    super(name, power);
    this.healing = healing;
  }

  heal(person) {
    person.health += this.healing;

    return `You should feel better now, my friend`;
  }

  // Modify attack methods with calling an original method
  attack() {
    console.log('I am healer, but strong enough');
    super.attack(); //! call the original method - this is possible :)
  }
}

const ariel = new Healer('Ariel', 'water', 20);

ariel.heal(merlin);
ariel.attack();

// For example
console.log(Healer.prototype.isPrototypeOf(ariel)); // true (comparing prototypes, not construction functions themselves)
console.log(Wizard.prototype.isPrototypeOf(Healer.prototype)); // true

// In practice
ariel instanceof Healer; // true
ariel instanceof Wizard; // true

// 4 main OOP principles:
// 1. Incapsulation (dividing code into blocks - classes that can communicate to each other)
// 2. Abstraction (hiding the complexity - class provides an APIs that we can use without knowing under the hood implementation)
// 3. Inheritance
// 4. Polimorphism (ability to modify methods based on data)
