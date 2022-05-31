// @ts-nocheck

//? Flags and descriptiors
// By default all flags are set to true
const obj = {
  prop1: 'some prop 1',
  prop2: 'some prop 2',
};

// Writable - can overwrite property or not
// Enumerable - if it's visible in for-in loop or Object.keys
// Configurable - If other flags can be changed (for some built-in props it set to false, Math.PI, for example)

Object.getOwnPropertyDescriptor(obj, 'prop1'); // {value: ..., writable: true, enumerable: true, configurable: true}

let descriptor = {
  enumerable: false,
  writable: false,
  configurable: false,
};

Object.defineProperty(obj, 'prop1', descriptor);
//! If some descriptor property is not defined, it goes to false:

Object.defineProperty(obj, 'prop3', { value: 3 }); // enumerable, configurable, writable - go to false

Object.keys(obj); // ['prop2']

obj.prop1 = 'new prop';

obj['prop1']; // 'some prop 1'

delete obj['prop1'];

obj['prop1']; // 'some prop 1'
//! In strict mode we'll get an error on write to readOnly property, in not strict it will be just ignored

// Clone an object
// This way we can clone flags and other hidden for loops props
// Object.defineProperties(obj, { propName: { value: 1, writable: false }});
// Object.getOwnPropertyDescriptors(obj) = returns all descriptors as an { prop: { value: ...}}
let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj));

//? Control access to Object as a whole
Object.preventExtensions(obj); // prevents adding new properties to an object
Object.seal(obj); // close object - new props can't be added, existing deleted,
// flags can't be changed, but values of existing properties can be changed
Object.freeze(obj); // freeze object completely - nothing can be changed, even values

//* And check if objects were modified this way:
Object.isExtensible(obj);
Object.isSealed(obj);
Object.isFrozen(obj);

//? Getters and Setters
// Usual properties - data properties
// Also there are - accessor properties
const accObj = {
  _name: null, // hidden prop (not really hidden) - we'll get it's value nd set new one through getter and setter
  get name() {
    return this._name || 'Ops, I do not have a name';
  },

  set name(name) {
    this._name = name;
  },
};
// Descriptiors of Accessors do not have writable and value flags, but have get and set
const another = {
  name: 'John',
  surname: 'Doe',
};

Object.defineProperty(another, 'fullName', {
  get() {
    return `${this.name} ${this.surname}`;
  }

  set(fullName) {
    [this.name, this.surname] = fullName.split(' ');
  }
})

for (let key in another) {
  console.log(key); // name, surname (fullName is not visible)
}

// Converting Objects to Arrays and vica versa
const keys = Object.keys(obj); // ['prop1', 'prop2']
const values = Object.values(obj); // ['some prop 1', 'some prop 2'];
const entries = Object.entries(obj); // [[prop1, 'some prop 1'], [prop2, 'some prop 2]];
const objFromEntries = Object.fromEntries(entries); // { prop1: 'some prop 1', prop2: 'some prop 2' }

// For...in
for (let key in obj) {
  console.log(key); // prop1 -- prop2 (on each enumeration we will get next key)
}

// Optional chaining
obj.prop1?.really; // doesn't fail with Can't read canAccess of undefrined
//! Optional chaining works only with defined variables
// Works to check access to method as well or to access var property
// some.method?.() - valid (note, after method name, not before)
// some?.[key] - valid

notExisting?.some; // Reference error
