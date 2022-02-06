console.log("Welcome to Asynchronous programming!");

setTimeout(() => {
    for (let index = 0; index < 4700; index++) {
        const element = index;
        console.log("The index is: " + element);
    }    
}, 100);

// Now, Done printing will be printed first
console.log("Done Printing!");