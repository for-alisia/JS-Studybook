// Ways to access DOM elements
const first = document.getElementById('myId');
// Also we have a global variable myId - exists for historical reasons
// If we declare a var with the same name, it will re-define the global one

// getElementById can be called only on document (other elements can not be used)

const second = document.quesrySelector('#myId');

// Pseudoclasses (:hover, :active, :last-child) also work

const collection = second.querySelectorAll('li'); // static collection

// Can be called on any element, not only document

second.matches('a'); // checks if element isa match for css selector
second.closest('article'); // tries to find article in parent's chain

const element = document.querySelector('.some');

// Nodes - all types, elements, text nodes and comments

// Get related nodes
element?.parentNode;
element?.nextSibling;
element?.previousSibling;
element?.childNodes;
element?.firstChild;
element?.lastChild;

// Get related elements
element?.parentElement;
element?.nextElementSibling;
element?.previousElementSibling;
element?.children;
element?.firstElementChild;
element?.lastElementChild;

//* element.parentNode could be usefull if we want to go up to document and get docment at the end

//? Tables - additional properties

const table = document.querySelector('table');

table?.rows;
table?.caption;
table?.tHead;
table?.tFoot;
table?.tBodies; // collection - could be more than one
const row = table?.tBodies[0].rows[0];

row?.cells;
row?.sectionRowIndex;
row?.rowIndex;
