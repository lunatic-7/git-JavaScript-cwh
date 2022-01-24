console.log("It's Exercise 2...");

/*
You have to create a div and inject it into the page which contains a heading.
whenever someone clicks on the div, it should be converted into an editable item. whenever user clicks away (blur). save the note into the local storage.

*/

// 1. Creating and injecting div:
let element = document.createElement("div");
element.className = 'myDiv';
element.id = 'myId';
element.innerHTML = "<p> Hey I am John Cena, This is to be edited and stored in local storage!</p>";
let edi = document.body.appendChild(element);

console.log(edi);

// 2. Converting div to an editable item:

let input = document.createElement("input");
input.id = 'myInp';
input.type = 'text'; // Default value is already set to text, we no need to write this line. 
input.setAttribute('value', "Enter here");
console.log(input);

let getText = document.getElementById('myId');
console.log(getText);

getText.addEventListener('click', () => {
    getText.replaceWith(input);
});

// 3. And whenever user clicks away(blur). save the note into the local storage.

input.addEventListener('blur', () => {
    let val = document.querySelector('#myInp').value;
    console.log(val);
    getText.innerText = val
    input.replaceWith(getText);
    localStorage.setItem('Edited: ', val);
});