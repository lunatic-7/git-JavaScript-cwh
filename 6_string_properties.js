console.log("HEYOOOOOOOO!");
const name = 'Harry';
const greeting = 'Good Morning';
console.log(greeting + ' ' + name);

let html;
html = "<h1> this is heading </h1>" +
       "<p> this is My para </p>";

console.log(html);

html = html.concat('this', ' str2');  // To concatenate these words in the end of string.
console.log(html);
console.log(html.length); // find length of string.
console.log(html.toLowerCase());  // To lowercase the string.
console.log(html.toUpperCase());  // To uppercase the string.

console.log(html[1]);  // find 2nd element in string.
console.log(html.indexOf('<'));  // Find index of given entity.
console.log(html.lastIndexOf('<'));  // Find last index of given entity.
console.log(html.charAt(3));  // Find character at given index.
console.log(html.endsWith('dswccewc'));  // checks if string ends with given sub-string.
console.log(html.includes('para'));  // checks if string includes the given sub-string.
console.log(html.substring(1,6));  // prints the substring of given indexes.
console.log(html.slice(0, 4));  // Works like .substring.
console.log(html.split('>'));  // spits the string in a list wherever we get the given entity.
console.log(html.replace('this', 'it'));  // replace all occurances of this with it.

let fruit1 = 'Orange\'';  // use backslash to use a quote.
let fruit2 = 'Apple';

// We can use backticks and use ${} to append JavaScript inside it.
let myHtml = `Hello ${name}  
<h1> This is "my Heading" </h1>
<p> You like ${fruit1} and ${fruit2}`;

console.log(myHtml);
document.body.innerHTML = myHtml;  // To show myHtml in HTML area.