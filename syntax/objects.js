// @ts-nocheck
const obj = {
  prop1: 'some prop 1',
  prop2: 'some prop 2',
};

Object.getOwnPropertyDescriptor(obj, 'prop1'); // {value: ..., writable: true, enumerable: true, configurable: true}

let descriptor = {
  enumerable: false,
  writable: false,
  configurable: false,
};

Object.defineProperty(obj, 'prop1', descriptor);

Object.keys(obj); // ['prop2']

obj.prop1 = 'new prop';

obj['prop1']; // 'some prop 1'

delete obj['prop1'];

obj['prop1']; // 'some prop 1'

// Clone an object
let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj));

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
