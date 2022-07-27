// Temporary dead zones

let a = 1;

const myFunc = () => {
  console.log(a); // Here we'll get type reference error (let was moved to the top, but it's not initialized)

  let a = 2;

  return a + 3;
};

myFunc();
