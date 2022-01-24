console.log("helloooooooo!");

/* Element Selectors

1. Single element selector.
2. Multi element selector.

*/

// Single Element Selector

let ele = document.getElementById("first")  // To access an element by it's Id
console.log(ele);
console.log(ele.className);  // Access class name of that element.
console.log(ele.textContent);  // Access text written in that element.
console.log(ele.childNodes);  // Access all of it's child nodes.
console.log(ele.parentNode);  // Access it's parent Node.

ele.style.color = "red"  // Change color of selected element.
ele.innerText = "I am John Cena. :)"  // Change text of selected element.
ele.innerHTML = "<b> I am John Cena :) </b>"  // Add This HTML in selected element.
console.log(ele.textContent);  // Access text written in that element, which we have updated now.

let sel = document.querySelector("#second")  // Here, we used #, means we are selection by id.
console.log(sel);

sel = document.querySelector(".child")  // Here, we used . it is the notation of selecion by class, It will select the first class with this class name.
console.log(sel);

sel = document.querySelector("h1")  // To get element by tag name.
console.log(sel);

// Multi Element Selector

let elem = document.getElementsByClassName("child")  // gives all elements with class name = child
console.log(elem);

elem = document.getElementsByClassName("container")
console.log(elem);  // getting elements using class name.

elem = document.getElementsByTagName("div")  // getting element using Tag Name.
console.log(elem);

Array.from(elem).forEach(element => {  // changes color of each elements.
    element.style.color = "green";
});