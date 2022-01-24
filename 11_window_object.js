console.log("Manipulating websites using Window Object.");

let a = window;  // This will show all the functions which this window object consists.
console.log(a);

// let b = window.document;  // This will show website's HTML.
let b = document;  // We don't need to use window. everywhere as window object is present globally and it can be used directly.
console.log(b);

alert("Hello Harry!")  // To show an alert with message Hello Harry!

let c = prompt("This will destroy your Computer!") // This will show this message and ask user for a input will we will receive in console.
console.log(c);

let d = confirm("Are you sure!")  // This will show user this message and gets a boolean value in console.
console.log(d);

let e = innerHeight; // Show height of our page.
console.log(e);

let f = innerWidth; // Show width of our page.
console.log(f);

let g = scrollX; // Show the width we have scrolled.
console.log(g);

let h = scrollY; // Show the height we have scrolled.
console.log(h);

let i = location; // Gives complete location of our page.
console.log(i);

let j = history;  // Gives history of website we have changed.
console.log(j);