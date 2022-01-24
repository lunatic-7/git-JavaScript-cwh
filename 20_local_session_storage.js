console.log("Hey, I am back!");

let sabzi = ['lehsun', 'adrak', 'pyaz', 'aalo', 'tamatar', 'muli', 'nimbu'];

// Adding key-value pair inside local Storage
localStorage.setItem("Name", 'Wasif');
localStorage.setItem("Name2", 'Casanova...');
// localStorage.setItem("Sabzi", sabzi);  // It will store it as an object here. To change this to string, we have to use JSON.stringify method, it will store whole array as a string which we can later make an array using method JSON.parse
localStorage.setItem("Sabzi", JSON.stringify(sabzi));

// Clears the entire local storage
// localStorage.clear();

// Clears a particular key-value pair
// localStorage.removeItem('Name');

// Retrieve an item from the local storage
let name = localStorage.getItem('Name');
name = JSON.parse(localStorage.getItem("Sabzi"));  // It will convert the list into a string.
console.log(name);

// Similar to local storage we can create session storage it has the same function as local storage.
// EX:
sessionStorage.setItem("Name", 'Wasif');
sessionStorage.setItem("Name2", 'Casanova...');

// Just the difference is local storage remains for forever unless we clear it using localStorage.clear() function. Whereas, session storage remains only for the session we are using that website, as soon as we quit our website it gets cleares, where localStorage doesn't.