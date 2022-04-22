const simplePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let number = Math.random();

    if (number > 0.5) {
      resolve(number);
    } else {
      reject(number);
    }
  }, 1000);
}); // If the number, generated by Math.random > 0.5, promise will be resolved with this number

simplePromise
  .then((number) => console.log(`Resolve successfully with ${number}`))
  .catch((err) => console.log(`Rejected with an error ${err}`));