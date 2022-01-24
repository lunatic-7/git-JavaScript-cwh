console.log("Welcome to Math objects...");

let x = 3;
let y = 6;
let z;

z = x + y;
console.log(z);
z = x - y;
console.log(z);
z = x * y;
console.log(z);
z = x / y;
console.log(z);

// Exploring the Math object

z = Math; // Gives list of all Math functions it has
console.log(z);

z = Math.PI;  // Gives value of PI
console.log(z);

z = Math.E; // Gives Euler value
console.log(z);

z = Math.round(2.7)  // Gives round off
console.log(z);

z = Math.ceil(2.3)  // gives max round off, here 3
console.log(z);

z = Math.floor(2.7)  // gives min round off, here 2
console.log(z);

z = Math.abs(-2)  // gives mode, here 2
console.log(z);

z = Math.sqrt(49)  // gives sp root, here 7
console.log(z);

z = Math.pow(2, 4)  // 2 ki shakti 4
console.log(z);

z = Math.min(2, 4, 34, 32, 574, 44, 0)  // gives minimum number.
console.log(z);

z = Math.max(2, 4, 34, 32, 574, 44, 0)  // gives maximum number.
console.log(z);

z = Math.random()  // gives random no between 0 to 1
console.log(z);

// a = (0, 1)
// To get 0 to 100 --> a*100 = (0, 100)
// To get 10 to 100 --> 10+a*(100 - 10)

z = Math.round(100 * Math.random())  // to get integer b/w 0 to 100
console.log(z);

z = 10 + Math.round((100 - 10) * Math.random())  // to get integer b/w 10 to 100
console.log(z);

// Converting degree to radins
function degToRad(degrees) {
    return degrees * (Math.PI / 180);
};
console.log(degToRad(90));

// Converting radians to degree 
function radToDeg(rad) {
    return rad / (Math.PI / 180);
};
console.log(Math.round(radToDeg(Math.PI/2)));