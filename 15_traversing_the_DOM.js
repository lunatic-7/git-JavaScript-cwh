console.log("Hey! I am back.");

let cont = document.querySelector(".no");  // will give first tag with this class.
console.log(cont);
cont = document.querySelector(".container");
console.log(cont);

console.log(cont.childNodes);  // this will give a list of all the children including new line and comments. So, not preferred.
console.log(cont.children);  // this will give the list of elements (tags) only.

let nodeName = cont.childNodes[1].nodeName;  // To get Name of second child
console.log(nodeName);
let nodeType = cont.childNodes[1].nodeType;
console.log(nodeType);  // To get type of second child. Type == 1, bc element has a type of 1.

// Node types with their indexes:
// 1. Element
// 2. Attribute
// 3. Text Node
// 8. Comment
// 9. document
// 10. docType
// 11. A document fragment node.

let container = document.querySelector("div.container")
console.log(container);
console.log(container.children[1].children[0].children);  // This is how we traverse in a DOM.

console.log(container.firstChild);  // Will give acc. to childNodes, means will give #text means new line.
console.log(container.firstElementChild);  // Will give acc. to chidren, means will give h1 tag, bc it is the first element.

// Similar to firstChild ansd firstElementChild
console.log(container.lastChild);
console.log(container.lastElementChild);

console.log(container.children);
console.log(container.childElementCount);  // will count no. of children.

console.log(container.firstElementChild);
console.log(container.parentNode);  // get parent Node
console.log(container.firstElementChild.nextSibling);  // get next sibling acc. to childNodes
console.log(container.firstElementChild.nextElementSibling);  // get next sibling element.
console.log(container.firstElementChild.nextElementSibling.nextElementSibling);  // get next to next sibling element.
