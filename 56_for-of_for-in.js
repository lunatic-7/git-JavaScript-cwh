console.log("for in and for of");

let arr = ["msd", "vilen", "john", "ambrose"];

// Iterating using traditional for loop
console.log("Using traditional for loop: ");
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element);
}

console.log("Using for of: ");
// Iteration using for of loop
for (const _ of arr) {
    console.log(_);
}

let obj = {
    name: "Wasif",
    lang: "Python",
    hobby: "Cricket"
}

// Iterating using traditional for loop
console.log("Using traditional for loop: ");
for (let index = 0; index < Object.keys(obj).length; index++) {
    const element = Object.keys(obj)[index];
    console.log(element);
}

// Iterating using for in loop

console.log("Using for in: ");
for (const key in obj) {
    console.log(obj[key]);
}

console.log("Using for of: ");
for (const _ of Object.values(obj)) {
    console.log(_);
}

let str = "I am a good boy!";

// Iterating a string
for (const _ of str) {
    console.log(_);
}