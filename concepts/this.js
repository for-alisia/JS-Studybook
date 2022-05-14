console.log(this);

function declaration() {
  console.log(this);
}

const expression = function () {
  console.log(this);
};

const arrow = () => {
  console.log(this);
};

declaration();
expression();
arrow();
