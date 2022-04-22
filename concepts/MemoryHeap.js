// Memory leaks

// Global variables
var a = {
  a: 'a',
};

// and more and more of them - they won't be cleaned by garbage collection

// Event listeners
var element = document.getElementById('some');
element.addEventListener('click', () => {
  console.log('some element');
});

// more and more without removal

// SetInterval

setInterval(() => {
  // refferencing objects
});

// if not remove leads to memoty leaks

// Interesting article about memory leaks
// https://developers.soundcloud.com/blog/garbage-collection-in-redux-applications
