console.log("We are at tutorial 9");
// console.log(1)
// console.log(2)
// console.log(3)

// General Loops: for, while, do-while

// For-loop

console.log("For loop:");
let a = 34;
a += 1;
a++;
console.log(a);
for (let i = 0; i < 7; i++) {
    console.log(i);
}

// While loop

console.log("While loop:");
let j = 7;
while (j < 10) {
    console.log(j + 1);
    j += 1;
}

// Do-while loop

console.log("Do-While loop:");
let k = 0;
do {
    if (k === 5) {
        k += 1;
        continue;
    }
    console.log(k + 1);
    k += 1;
} while (k < 10);

let arr = [2, 5, 6, 4, 2, 3];

// loop array

console.log("Loop Array:");
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element)
}

// Another method to loop an array.
arr.forEach(function name(element) {  // prints the elements of array
    console.log(element);
});

// Another way to write upper code, Arrow function

arr.forEach(element => {
    console.log(element);
});

arr.forEach(function (element, index, array) {  // prints element, index and whole array.
    console.log(element, index, array);
});

// Method to loop an object
let obj = {
    name: "Rohan Das",
    age: 78,
    type: "Dangerous Programmer",
    os: "Ubuntu"
}

console.log("Loop Object:");
for (let key in obj) {
    console.log(`The ${key} of object is ${obj[key]}`)
}

for (let key in obj) {
    console.log(obj[key]);
};

console.log('done');         
