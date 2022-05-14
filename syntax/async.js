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

//* Please test in browser!
// Our test url to fetch data
const base = 'https://jsonplaceholder.typicode.com';
const usersURL = `${base}/users`;
const postsURL = `${base}/posts`;
const albumsURL = `${base}/albums`;

// Promises
const promise = new Promise((resolve, reject) => {
  if (true) {
    // It always will be resolved :)
    resolve('I am resolved');
  } else {
    reject('I am rejected');
  }
});

promise.then(console.log); // I am resolved;

// Fetch returns a promise
fetch(usersURL)
  .then((resp) => resp.json())
  .then(console.log)
  .catch((err) => console.log(err))
  .finally(() => console.log('finally runs in all cases: success and failed'));

//! If you put catch in the middle of the chain, errors happening after it will not be catched

// Promise.all = how to map through urls array
const urls = [usersURL, postsURL, albumsURL];

//! Real life examples - how to fetch through the array!
Promise.all(
  urls.map((url) => fetch(url).then((res) => res.json())) // return a promise
)
  .then((resArr) => console.log(resArr))
  .catch('one or more requests failed');

// with async/await
const getData = async () => {
  try {
    const [users, posts, albums] = await Promise.all(
      // Promise.all will return an array with result fo each fetch
      urls.map(async (url) => {
        const response = await fetch(url);

        return response.json(); // ! returning a promise!
      })
    );

    console.log('users', users);
    console.log('posts', posts);
    console.log('albums', albums);
  } catch (err) {
    console.log('Error on fetching', error);
  }
};

getData();

// Modern syntax (for await of)

const getDataFromAPI = async () => {
  const promisesArr = urls.map((url) => fetch(url)); // 1. Create promises array

  for await (let request of promisesArr) {
    // 2.Go through promises array with new loop
    const data = await request.json();

    console.log('From for await', data); // 3. Do smth with data
  }
};

getDataFromAPI();

// Promises and Event Loop
// With Promises Microtasks (Job) Queue was added and it has bigger priopity than Tasks (Callback) Queue
console.log('Promises and Event Loop');
setTimeout(() => console.log('SetTimeout with 0 - 1'), 0); // It would run after Promise.then
Promise.resolve('hi').then((data) => console.log('Promise.then - 2', data)); // It would run before setTimeout

// Parallel, sequential, allSettled and race
const promisify = (result, delay) =>
  new Promise((resolve) => setTimeout(() => resolve(result), delay));
const promiseRejected = (error, delay) =>
  new Promise((_, reject) => setTimeout(() => reject(error), delay));

const ap = () => promisify('a', 500);
const bp = () => promisify('b', 2000);
const cp = () => promisify('c', 4000);
const errorp = () => promiseRejected('failed', 1500);

// Promise.all - resolves only if all promises resolved, if only one will fail, the whole thing will fail
async function parallel() {
  const promises = [ap(), bp(), cp()];

  const [res1, res2, res3] = await Promise.all(promises);

  return `In parallel: ${res1}, ${res2}, ${res3}`;
}

parallel().then(console.log); // We'll see not earlier then the longest one takes to finish

// Promise.race - it will take the first one even if this promise is failed
async function race() {
  const promises = [ap(), bp(), cp()];

  const res = await Promise.race(promises);

  return `In race: ${res}`;
}

race().then(console.log); // We'll get a as fastest one - race will return only the first resolved

// Promise.any - it will take the first successfull one and fails only if all promises failed
async function any() {
  const promises = [errorp(), bp(), cp()];

  const res = await Promise.any(promises);

  return `In any: ${res}`;
}

any().then(console.log); // We'll get a as fastest one - race will return only the first resolved

async function sequence() {
  const res1 = await ap();
  const res2 = await bp();
  const res3 = await cp();

  return `In sequence: ${res1}, ${res2}, ${res3}`;
}

sequence().then(console.log);

// Promise.allSettled
async function parallelSettled() {
  const promises = [ap(), bp(), errorp()];

  // it will return { status: 'fullfilled', value: someValue } for success and { status: 'rejected', reason: errorHere } for error
  const [res1, res2, res3] = await Promise.allSettled(promises);

  return `In parallel: ${res1.value}, ${res2.value}, ${res3.reason}`;
}

parallelSettled().then(console.log);