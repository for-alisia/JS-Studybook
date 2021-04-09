// @ts-nocheck
const obj = {
  prop1: 'some prop 1',
  prop2: 'sopme prop 2',
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
