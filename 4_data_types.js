// Primitive data types:

// String
let name = 'Wasif';
console.log('Your name is ' + name);
console.log('Data type is ' + (typeof name));

// Number
let num = 7;
console.log('Data type is ' + (typeof num));

// Boolean 
let bool = true;
console.log('Data type is ' + (typeof bool));

// Null
let nu = null;
console.log('Data type is ' + (typeof nu));

// Undefined
let und = undefined;
console.log('Data type is ' + (typeof und));


// Reference Data Types

// Arrays
let arr = [1, 2, 3, 4, 5, 'wasif'];
console.log('Data type is ' + (typeof arr));

// Object Literals
let obj = {
    wasif: 70,
    Mano: 77,
    'Shubham kumar': 2
}

console.log(obj);
console.log('Data type is ' + (typeof obj));

// Functions
function funcName(params) {
    
}

console.log('Data type is ' + (typeof funcName));

// Date
let date = new Date();
console.log(date);
console.log('Data type is ' + (typeof date));
