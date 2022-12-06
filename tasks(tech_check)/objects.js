// Descriptors
const obj = {};

Object.defineProperty(obj, 'name', { value: 'John' });

console.log(obj.name);
delete obj.name;
console.log(obj.name);
// Here we can not delete property - when we define a property with Object.defineProperty,
// descriptors (writable, configurable and enumerable) go to false by default (if not provided)
// Possibility of deletion is defined by configurable descriptor/
