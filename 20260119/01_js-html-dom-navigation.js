// Select a parent element
const bodyNode = document.body;

// Access child nodes
const bodyChildren = bodyNode.childNodes;

// First and last child
const firstChild = bodyNode.firstChild;
const lastChild = bodyNode.lastChild;

// Navigate using siblings
const heading = document.getElementById("id01");
const nextNode = heading.nextSibling;
const previousNode = heading.previousSibling;

// Access parent node
const parentOfHeading = heading.parentNode;

// Reading text using different approaches
const textUsingInnerHTML = heading.innerHTML;
const textUsingFirstChild = heading.firstChild.nodeValue;
const textUsingChildNodes = heading.childNodes[0].nodeValue;

// Root nodes
const fullBody = document.body;
const fullDocument = document.documentElement;

// Node properties
const nodeNameValue = heading.nodeName;
const nodeTypeValue = heading.nodeType;

// Log values for understanding navigation
console.log(bodyChildren);
console.log(firstChild, lastChild);
console.log(parentOfHeading);
console.log(textUsingInnerHTML);
console.log(textUsingFirstChild);
console.log(textUsingChildNodes);
console.log(nodeNameValue);
console.log(nodeTypeValue);
