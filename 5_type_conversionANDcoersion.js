// Type conversion 
console.log('Welcome to tut5');
let myVar;
myVar = String(34);
console.log(myVar, (typeof myVar));

let booleanVar = String(true);
console.log(booleanVar, (typeof booleanVar));

let date = String(new Date());
console.log(date, (typeof date));

let arr =  String([1,2,3,4,5]);
console.log(arr.length, (typeof arr));

let i = 75;
console.log(i.toString())

let stri = Number("3434");
stri = Number("343d4");  // Will give NaN (Not a number) as it won't be able to convert this in number.
stri = Number(false);
stri = Number([1,2,3,4,5,6,7,8,9]);
console.log(stri, (typeof stri));

let number = parseFloat('34.098');


console.log(number.toFixed(2), (typeof number));

// Type coercion

let mystr = "698";
let mynum = 34;

console.log(mystr + mynum);  // Js will change mynum to str and finally return 69834.

let mystr1 = Number("698");
let mynum1 = 34;

console.log(mystr1 + mynum1);
