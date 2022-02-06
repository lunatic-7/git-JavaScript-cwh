console.log("Async Await; STARTING"); // PRINTED 1st

// This async function will return a promise.
async function harry() {
    console.log("Inside harry function"); // PRINTED 3rd
    const response = await fetch("https://api.github.com/users");  // await means, It will be resolved asynchorously till then the program can leave the function and do the further work if any.
    console.log("before response");  // PRINTED 7th
    const users = await response.json(); // Now, there are no further works to do, So it will simply wait for the await to convert respose in JSON,and then execute it.
    console.log("users resolved");  // PRINTED 8th
    return users;  // So, function is finally resolved so, it will run the line 17 and print the data in console. 
}

console.log("Before calling harry");  // PRINTED 2nd
let a = harry();  
console.log("After calling harry");  // PRINTED 4th
console.log(a);  // PRINTED 5th
a.then(data => console.log(data))  // PRINTED 9th
console.log("Last line of this JS file!");  // PRINTED 6th