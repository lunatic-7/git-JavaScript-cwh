console.log("Helllllooo!!!");

let element = document.createElement("li");  // creating a li element.
element.className = "childUl"; // setting class of element.
element.id = "childUl"; // setting id of element.
element.setAttribute("title", "mytitle"); // setting title attribute to mytitle.
// element.innerText = "Hello this is created by me!" // Adding Text to element, we could have used innerHTML as well, which will add HTML to our text also.

// Another method to create text and appending it to our element li.
let text = document.createTextNode("I am a text Node!")
element.appendChild(text);  // appending the text.

let ul = document.querySelector("ul.this");  // Accessing ul element of class this.
ul.appendChild(element);  // Appending element to ul. 

console.log(element);

let elem2 = document.createElement("h3")
elem2.id = "elem2";
elem2.className = "elem2";
let tnode = document.createTextNode("This is a created node for elem2");
elem2.appendChild(tnode);
element.replaceWith(elem2);  // replacing (element) element with elem2.
console.log(elem2);

let myul = document.getElementById('myul');
console.log(myul.children[0]);
myul.replaceChild(element, document.getElementById('first')); // replacing child of id first with element.
myul.removeChild(document.getElementById('last')); // removing child with id name last.
let pr = elem2.hasAttribute('href');  // checks if elem2 has attribute href.
elem2.removeAttribute('id');  // removing id attribute from elem2
elem2.setAttribute('title', 'myelem2title');
console.log(elem2, pr);

// quick quiz
// create a heading element with text as "Go to CodeWithHarry" and create a tag outside it with href = "https://www.codewithharry.com"

let head = document.createElement('h3');
head.innerText = 'Go to Code With Harry!';
let doc = document.getElementById("second");
doc.appendChild(head);
let link = document.createElement('a');
link.setAttribute('href', 'https://www.codewithharry.com');
link.innerText = 'https://www.codewithharry.com';
doc.appendChild(link);
console.log(link);
console.log(head);