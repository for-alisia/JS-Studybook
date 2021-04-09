// @ts-nocheck
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// To loop through array:
for (let i = 0; i < arr.length; i++) {
  //console.log(arr[i]);
}

for (let el of arr) {
  //console.log(el);
}

arr.forEach((el, idx) => {
  //console.log(el, idx);
});

// Mutate array:

let newLength = arr.push(10); // fast operation
let deletedEl = arr.pop(); // fast operation
let newlength1 = arr.unshift(0); // slow operation
let deletedFromStart = arr.shift(); // slow operation

arr.reverse(); // [9,8,7,6,5,4,3,2,1]

arr.sort((a, b) => {
  return a > b ? 1 : -1;
}); // [1,2,3,4,5,6,7,8,9]

arr.splice(2, 3); //[1,2,6,7,8,9]

// Not mutate an array
let arr1 = arr.map((el) => el * 2); // [2,4,12,14,16,18]

let arr2 = arr.filter((el) => el > 3); // [6,7,8,9]

let arr6 = arr.slice(2, 4); // [6,7]

// Helpers
let h = arr.indexOf(6); // 2
let h2 = arr.find((el) => el > 3); // 6
let h3 = arr.findIndex((el) => el > 3); // 2
let h4 = arr.some((el) => el < 3); // true
let h5 = arr.every((el) => el > 5); // false
let h6 = arr.includes(8); // true
let summ = arr.reduce((acc, el) => acc + el, 0); // 33

// Clone the array

let arr3 = [...arr];
let arr4 = [].concat(arr);
let arr5 = arr.slice();

// Creation
let arr7 = new Array(2); // [undefined, undefined]
let arr8 = Array.of(2); //[2]
// Array.from - array from pseudomassives or iterable objects, second arg = map fn to convert or fill new array
let arr9 = Array.from({ length: 2 }, () => []); //[[], []];

// If object is iterable, we can create an array just using [...obj]

// Switch elements in array

[arr[1], arr[2]] = [arr[2], arr[1]];
console.log(arr);
