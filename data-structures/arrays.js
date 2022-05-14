// Array - classsic data structure, built in in justifyContent:
// Complexity
// lookup (access) - O(1)
// push - O(1)
// insert - O(n)
// delete - O(n)

// Example
const strings = ['a', 'b', 'c', 'd'];

// Access
console.log(strings[2]); // c, O(1) - no looping

// Push - add to the end
strings.push('e');
console.log(strings); // [a,b,c,d,e], O(1) - no looping

// Pop - remove from the end
strings.pop();
console.log(strings); // [a,b,c,d], O(1) - no looping

// Unshift - add to the beginning
strings.unshift('x');
console.log(strings); //[x,a,b,c,d], O(n) - looping (need to re-assign all indexes)

// Slice - insert in the middle
strings.splice(2, 0, 'alien');
console.log(strings); // [x,a,alien,b,c,d], O(n) - looping (need to re-assign at least part of indexes)

// Static arrays - arrays with predefined length (in C++ and some other langs)
// Dynamic arrays - elements can be added 'in flight' (in JS arrays are dynamic)
// With dynamic arrays push (append) can be O(n) complexity - if there is no space in memory shelves ->
// the whole array will be dynamically moved in memory

// Let's create own array class
class MyArray {
  constructor() {
    this.data = {};
    this.length = 0;
  }

  get(index) {
    return this.data[index];
  }

  push(element) {
    this.data[this.length] = element;
    this.length++;

    return this.length;
  }

  pop() {
    const item = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;

    return item;
  }

  // Create shiftLeft(index) and shidtRight(index) methods

  unshift(element) {
    this.length++;
    for (let i = this.length - 1; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[0] = element;

    return this.length;
  }

  forEach(fn) {
    for (let i = 0; i < this.length; i++) {
      fn(this.data[i], i, this.data);
    }
  }

  map(fn) {
    const newArr = new MyArray();

    for (let i = 0; i < this.length; i++) {
      newArr.push(fn(this.data[i], i, this.data));
    }

    return newArr;
  }
}

const myArr = new MyArray();
myArr.push(11);
myArr.push(22);

console.log(myArr);
console.log(myArr.length);
console.log(myArr.get(1));

myArr.forEach((el, idx, arr) => {
  console.log(el, idx, arr);
});

const newArr = myArr.map((el) => el * 2);
console.log(newArr);

myArr.unshift('Hello');

console.log(myArr);

// Example - reverse a string

function reverseString(str) {
  if (typeof str !== 'string' || str.length < 2) return str;

  return str.split('').reverse().join('');
}

const reverseStringEs6 = (str) => [...str].reverse().join('');

console.log(reverseStringEs6('abcde'));
