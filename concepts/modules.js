// We need to keep our variables private not to pollut global scope and without a risk to be overwritten
// How we solved modules issue before - Module pattern - IIFE
var someGlobal = '1234';
var myModule = (function (someGlobal) {
  // Immediately Invoked Function Expression - IIFE
  // Our code here
  // private variables (but our public functions can have access to them via closure if we want it)
  const user = { name: 'Alex' };

  // functions we need
  function abc() {
    console.log('Some important function');
  }

  // Here we can work with someGlobal as a parameter and not change global variable (only with primitives)
  // But we can change a name for a global object if we have name clash
  someGlobal = '0';

  // To make some parts of our code available for other parts of app, just return what we need - public API
  return {
    importantFunc: abc,
  };
})(someGlobal);

console.log(someGlobal);

// Cons of Module Patterb
// 1. We still polluting the global namespace - myModule can be overwritten
// 2. Order of dependencies - if some module uses APIs from another we should check the order of script tags in html

// CommonJS - Node.js is using it
// With CommonJS modules are loading syncroniozly
var module1 = require('module1');
var usefullFunc = require('module2').usefullFunc;

function myUsefullFn() {
  console.log('Hi');
}

module.exports = {
  usefullFn: myUsefullFn,
};

// In Frontend JS we need to create a bundle for a page - sync loading of the scripts is not important in this case (Browserify and Webpack)

// AMD
// AMD designed for the browsers - it loads scripts async
define(['module1', 'module2'], function (module1Import, module2Import) {
  var module1 = module1Import;
  var module2 = module2Import;

  function myFunc() {}

  return {
    myFunc,
  };
});

// ES Modules
import module1 from './module1.js';
import { module2 } from './module2.js';

const secret = '1234';

export const myEsFn = () => {};

export default secret;

// This modules can be used natively in browser,but don't forget:
// add type="module" attr to script tags
// Modules can be served only from server (not staticly)
