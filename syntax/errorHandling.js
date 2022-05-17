// JS has special constructor function for Errors
const error = new Error('your message here');

// To get an error and stop executing you need to throw an error
throw error;

// It's possible to throw anything (error obj, string, boolean, etc) and it will stop execution
throw 'hello';

// Error has 3 usefull properties
error.name; // Error
error.message; // your message here
error.stack; // stack trace of the error - shows where error happened

// Built in error types - this error are throwing automatically
new SyntaxError();
new ReferenceError();

// Handling errors: to closest catch, if it does not exist, onerror()

// Error Handling
// Try - catch (they can be nested inside each other) - works with sync errors - it will not work with setTimeout

function fail() {
  try {
    throw new Error('Oops'); // it will catch and syntax (reference) error too
  } catch (err) {
    console.log(err);
  } finally {
    console.log('It will be work anyway'); // finally block will be executed anyway

    return true; // Let's return smth from a function
  }

  console.log('!!!'); // It will never runs if we have an error
}

fail(); // it will catch an error

// Catch() - async errors - if do not use catch we can face "silent" errors - we can have multiple catch blocks
// In the cse of nested promises - add catch to each then chain (it will be handled by upper scope, but it's a good practice to handle them separately)
Promise.resolve('asyncfails')
  .then((res) => {
    throw new Error('#1 failed');
    console.log(res); // we'll not get it because of the error

    return res;
  })
  .then((res) => console.log(res)) //  we'll not get there because of the error
  .catch((err) => {
    console.log(err);

    return 'Wow';
  })
  .then((resErr) => console.log(resErr)); // we'll get 'Wow' here, as catch before returns it

// Extending base Error
class PermissionError extends Error {
  constructor(message) {
    super(message);

    this.name = 'PermissionError';
    this.notification = 'You do not have correct permission for this action';
  }
}

const permissionError = new PermissionError('Ooops');
permissionError.notification; // You do not have correct permission for this action

//! ES2019(ES10) update
// Now it's a valid syntax (without providing an error as a parameter to a catch block)
try {
  3 + 4;
} catch {
  console.log('Oops');
}
