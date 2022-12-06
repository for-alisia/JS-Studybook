// L1-L2, basic set
// -----------------

/**
 * I. Git
 * 
 * Describe workflow for the story
 * To check: 
 * Branching strategies (trunk-based, feature-based, release-based)
 * Main git operations (pull, commit, push, difference between rebase/merge, resolving conflicts)
 * 
 * II. HTML
 * semantic tags
 * accessibility of the web-page
 * 
 * III. CSS
 * How to put block in the center (different options - flex, absolute)
 * Box-sizing: difference between content-box and border-box
 * Collapsed margins - describe what is it
 * Specificity - what is it and how to count
 * CSS pre-processors - what do you know and what benefits we have
 * 
 * IV. Javascript
 * Closures
 */
// Create count function that will return next number each call

// solution
const count = (() => {
  let counter = 0;

  return () => counter++;
})();

console.log(count()); // 0
console.log(count()); // 1
console.log(count()); // 2

/**
 * Async
 */
// Task - write code to fetch data from apis
const urls = ['http://first/url', 'http://second/url', 'http://third/url'];

//! Real life examples - how to fetch through the array!
Promise.all(
  urls.map((url) => fetch(url).then((res) => res.json())) // return a promise
)
  .then((resArr) => console.log(resArr))
  .catch('one or more requests failed');

  const getData = async () => {
    try {
      const [first, second, third] = await Promise.all(
        urls.map(async (url) => {
          const response = await fetch(url);
  
          return response.json();
        })
      );
    } catch (err) {
      console.log('Error on fetching', error);
    }
  };
  
  getData();

// Promise - Static methods 

/**
 * Classes in Javascript: 
 * prototype inheritance, 
 * static, 
 * private and protected,
 * abstract classes and methods
 * cmparing classes in TypeScript and JavaScript
 * OOP principles
 */

/**
 * Typescript
 * Decorators
 * Generics
 * Utility Types - Omit, Partial/Required, Readonly, Record, Pick
 */

/**
 * React
 * Component lifecycle - for class-based and for functional
 * Virtual DOM
 * Props drilling - what is it
 * Global state management - Redux, async actions, Flux archtecture
 * 
 * Task:
 * 1. Create simple form with an input
 * 2. Make input controllable
 * 3. Add fake response function when value of the input changed
 * 4. Add simple validation (not less than 3 chars)
 * 5. Add debounce logic to the input
 * 6. Add clean up for setTimeout
 */

/**
 * Tests
 * 1. Propose scenarios for the task
 * 2. Black/White approach
 * 3. Test pyramid
 */

/**
 * Code quality gates:
 * 1. Tests
 * 2. Linters
 * 3. Sonar
 * 4. Code reviews
 * 5. What is CI/CD (what jobs can we have there)
 */

/**
 * Team work:
 * 1. Scrum routines
 * 2. Estimation techniques
 * 3. Actions if you do not know how to implement the story
 */

/**
 * If we have some time:
 * Objects and Arrays
 * 1. Arrays methods that modify the array and not modify
 * 2. Static Object methods how to iterate through array
 */


