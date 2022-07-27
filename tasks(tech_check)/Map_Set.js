// Task
// Create function that will leave only unique elements
// Unique values in array
let myArray = [1, 1, 2, 6, 4, 3, 6, 7, 3, 4, 2, 5, 7, 8, 3, 4, 5, 1];

// Solution
function onlyUnique(arr) {
  return Array.from(new Set(arr));
}

// NaN for Map as a key
const myMap = new Map();

myMap.set(NaN, 100);
myMap.set(NaN, 'I am NaN');

console.log(myMap.get(NaN)); // What we'll see in console?

// Solution - I am NaN (SameValueZero algorithm to compare keys)

/**
 * MAP
 *
 * Map - allows to have an object as a key (and it will not convert to string)
 *
 * Features:
 *
 * keys comparison - as "===", but Nan === NaN (in default case with '===' NaN !== NaN )
 * order in loops - as properties were added (not priority for "numbers" properties)
 */

// Simple operations with map
// Creation
const map = new Map();

// Adding an element
const person = { name: 'Alex' };

map.set(person, 0);

// Chaining
map.set('alex', 2).set('jane', 3); // set returns a map

// Getting an element
map.get(person); // 0;

// Chech if has a key
map.has(person); // true

// Getting size of a map
console.log(map.size); // 1

// Deleting an element
map.delete(person);

map.get(person); // undefined

// Clear all elements

map.set(person, 1);

map.clear(); // map.size = 0;

/** Creation from arrays */
const newMap = new Map([
  [1, 'alex'],
  [2, 'max'],
  [3, 'jane'],
]);

newMap.keys(); // {1,2,3} - not an array, it will be an iterable object

// Check all keys in a loop
for (let key of newMap.keys()) {
  console.log(key, newMap.get(key)); // 1 alex, 2 max, 3 jane
}

// forEach()
newMap.forEach((value, key, map) => {
  // on first iteration: key=1, value=alex
});

newMap.values(); // {alex, max, jane} - iterable object, not array

newMap.entries(); // {[1, alex], [2, max], [3, jane]} - iterable object

/** Converting to an object and from object */
const user = {
  role: 'admin',
  name: 'Alex',
  age: 30,
};
// Create map from object
const userMap = new Map(Object.entries(user));

// Convert map to a new object
const newUser = Object.fromEntries(userMap.entries()); // { role: 'admin', name: 'Alex', age: 30}

// Shorter way:
const newShortUser = Object.fromEntries(userMap); // { role: 'admin', name: 'Alex', age: 30}

/*******************************************/
/**
 * SET
 *
 * Collection of the unique values (iterable)
 */

// Creation
const set = new Set();

// Adding
set.add(1);
set.add(2);
set.add(1); // this value will not be added to the set

set.has(1); // true;
set.size; // 2

// Deleting
set.delete(1);
set.clear(); // clear set

// Loops
let newSet = new Set([1, 2, 3, 4, 5, 1]); // set: 1,2,3,4,5

for (let val of newSet) {
  //console.log(val);   // 1,2,3,4,5
}

newSet.forEach((val, valAgain, set) => {
  //console.log(val);
});

newSet.values(); // 1,2,3,4,5 - iterable obj
newSet.keys(); // 1,2,3,4,5 - iterable obj (need to be compatible with map)
newSet.entries(); // { [1,1], [2,2], [3,3], [4,4], [5,5] } - iterable obj (need to be compatible with map)

// WEAK MAP and WEAK SET - main differences
// 1. In WeakMap keys should be an objects (not primitives)

// Task - check if it works (answer - no)
let weakMap = new WeakMap();

weakMap.set('test', 1);

// 2. Key will be removed if the only link to the object is inside WeakMap
// 3. We cannot iterate thourgh it and size method doesn't exist
