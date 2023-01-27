//? XMLHttpRequest
// 1. Old method, but still can be met in code bases
// 2. Rare cases if we need support old browsers without polyfills
// 3. We need some functionality that is not available in Fetch API (pregress indicator, for example)

// There are 2 types - sync and async (only async is prectically used)

// * Creation

let xhr = new XMLHttpRequest(); // No args here

// * Initialization

const method = 'POST'; // Can be any REST method here - GET, PUT etc
const URL = 'https://my/url.com'; // URL to send a request

const async = true; // what mode should be used - optional
const user = 'me'; // login for basic auth - optional
const password = '123'; // password for basic auth - optional

//! Open is not opening a connection, it is just configuring a request

xhr.open(method, URL, async, user, password);

// * Sending

const body = 'request body'; // Optional parameter

xhr.send(body);

// * Headers

xhr.setRequestHeader('Content-Type', 'application/json'); // install the header to send

// The Headers can not be unset - the next set of the same header will add data to the header, not rewrite it

xhr.getResponseHeader('Content-Type'); // get the header from response

xhr.getAllResponseHeaders(); // get all response headers

//? we cannot get Set-Cookie and Set-Cookie2 through these methods

// headers - it will be a string divided by '\r\n', header and value always divided by ': '


// * Listen to events:

// onload - when we get some response (HTTP-errors are included)

xhr.onload = function() {
  console.log(xhr.status);  // Here we can get status
  console.log(xhr.response); // Here we can get response
  console.log(xhr.statustext); // OK for 200, Not found for 404, Forbidden for 403 and so on
}

// onerror - if some error happened on sending request (invalid url or no connection for examle)

xhr.onerror = function() {
  console.log('Error happened and request was not sent');
}

// onprogress - happens periodically while server is sending response

//! Works only on getting data from server, not sending them
//! If we need to show indicator of upload - use xhr.upload

xhr.onprogress = function(event) { /
  // event.loaded - amount of loaded bytes
  // event.lengthComputable equals true if server set the header Content-Length
  // event.total - amount of total bytes (only if lengthComputable equals true)
  console.log(`Loaded ${event.loaded} of ${event.total}`);
};

// upload - use this if you need to upload a file
xhr.upload.onprogress = function(event) {
  console.lof(`Sent ${event.loaded} of ${event.total} bytes`);
};

xhr.upload.onload = function() {
  console.log('Data was sent successfully');
};

xhr.upload.onerror = function() {
  console.log(`Error happened: ${xhr.status}`);
};

// timeout
xhr.timeout = 10000; // if request is not ready, it will be cancelled and timeout event will happen

// Response type
xhr.responseType = 'json'; // Also can be 'blob', 'document', 'text', 'arraybuffer' - type of the response we expect

// Here we do not need to parse JSON  - it will be done automatically if we set responseType to json

// Request states - old property and old events - now we should use onload, onprogress

xhr.readyState;

UNSENT = 0; // initial state
OPENED = 1; // open method was called
HEADERS_RECEIVED = 2; // we got headers of the response 
LOADING = 3; // loading a response (part of the data is loaded)
DONE = 4; // request is completed

xhr.onreadystatechange = function() {
  if (xhr.readyState == 3) {
    console.log('We started to load the data');
  }
  if (xhr.readyState == 4) {
    console.log('The request is completed');
  }
}

// * Cancelling the request

xhr.abort();

xhr.onabort = function() {
  // will be called if request is aborted
  // xhr.status will be set to 0
}

//! error, abort, load and timeout - self-excluding, only one can happen

//? FETCH
(async function() {
  const response = await fetch(url); // Built-in Response class

  if (!response.ok) {
    console.log('Error happened');
  } else {
    const json = await response.json(); 
  }
})();

// Other methods to get response body:
// response.text()
// response.formData()
// response.blob()
// response.arrayBuffer()
// response.body - ReadableStream, can read responce by parts
//! Only one method to read a response can be called - we cannot read it twice!

// Setting headers and other params to the request
let withHeaders = fetch('my/url', {
  method: "POST",
  headers: {
    Authentication: 'secret',
    "Content-Type": "text/plain;charset=UTF-8"
  },
  body: undefined,
});

// Getting response headers
response.headers.get('Content-Type'); // It's a Map-like structure (but not exactly a Map)

// Abort
let controller = new AbortController();
fetch(url, {
  signal: controller.signal
});

// Download progress
let response = await fetch('your/url');

const reader = response.body.getReader();

while(true) {
  // done is true for the last chunk
  // value is Uint8Array of the chunk bytes
  const {done, value} = await reader.read();

  if (done) {
    break;
  }

  console.log(`Received ${value.length} bytes`)
}