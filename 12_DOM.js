console.log("Hello World");
let a = document;
a = document.all;  // Will give all the HTML tags present.
a = document.body;  // To get body part of HTML.
a = document.forms;  // To get all forms present in HTML.
a = document.forms[0];  // To get the 1st form present.
// a.forEach(element => {
//     console.log(element);
// });  // We can't directly treat HTML tags as an array to do that we have to do like the following

Array.from(a).forEach(element => {  // To change HTML tags in array we use Array.from(a)
    console.log(element);
});
console.log(a);
let b = document.links;  // To see if any link in present.
let c = document.links[0];  // To get that link
let d = document.links[0].href;  // To get only the href part of link.
console.log(b);
console.log(c);
console.log(d);

let e = document.scripts[0];
console.log(e);