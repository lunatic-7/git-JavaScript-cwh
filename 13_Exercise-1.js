// Exercise 1
// You have to create a variable which is a string containing the text which is a link you are interested in. 

// You have to fetch all the links from a given page which contains this text

// codewithharry.com 
// javascript

let a = "Hello";

let b = document.links;
console.log(b);

Array.from(b).forEach(element => {
    if (element.text === a) {  // We can also write element.text.includes(a)
        console.log(`Text: ${element.text}\nLink: ${element.href}`);
    }
});
