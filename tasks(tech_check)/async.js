// Event Loop
setTimeout(() => console.log('1'), 0);
Promise.resolve('2').then((res) => console.log(res));
console.log('3');

// Solution - 3, 2, 1

// What will be the output
const promise = new Promise((res) => res(2));
promise
  .then((v) => {
    console.log(v);
    return v * 2;
  })
  .then((v) => {
    console.log(v);
    return v * 2;
  })
  .finally((v) => {
    console.log(v);
    return v * 2;
  })
  .then((v) => {
    console.log(v);
  });

// Solution: 2, 4, undefined,8

// What's the output here?
const promise1 = new Promise((resolve, reject) => {
  reject(Error('Some Error Occurred'));
})
  .catch((error) => console.log(error))
  .then((error) => console.log(error));

// Solution: 'Some error occured', undefined

// What will be the output?
const promise2 = new Promise((resolve, reject) => {
  reject(Error('Some error occurred'));
});
promise2.catch((error) => console.log(error.message));
promise2.catch((error) => console.log(error.message));

// Solution - 2 times Some error occured

// Task - write code to fetch data from apis
const urls = ['http://first/url', 'http://second/url', 'http://third/url'];

//! Real life examples - how to fetch through the array!
Promise.all(
  urls.map((url) => fetch(url).then((res) => res.json())) // return a promise
)
  .then((resArr) => console.log(resArr))
  .catch('one or more requests failed');

// with async/await
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
