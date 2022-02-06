console.log("Regular Expression STARTED...");

let reg = /harry/;  // This is regular expression literal in jS (means the way to write a regular expression).

console.log(reg);  // simply print content of reg.
console.log(reg.source);  // simply print regular expression content of reg.

let s = "This is great code harry bhai! Good job harry."

// Function to match expressions.
// 1. exec() = This function will return an array for match or null for no match.

// Will only give first occurenece of harry.
let result = reg.exec(s);
console.log(result); 
// We won't get 2nd or 3rd occurence of harry here. 
result = reg.exec(s);
console.log(result); 
result = reg.exec(s);
console.log(result); 

// console.log(result.input);  // To get input of result.
// console.log(result.index);  // To get index where we get our regular expression in input.


// Use of g (global) 
let reg2 = /harry/g;  // g means global (In this it will give all the occurences of our regular expression).

let s2 = "This is great code harry bhai! Good job harry."

let result2 = reg2.exec(s2);
console.log(result2); 
// Will give 2nd or 3rd occurence of harry as well. 
result2 = reg2.exec(s2);
console.log(result2); 
result2 = reg2.exec(s2);  // As there is no 3rd occurence of harry sp we will get null in output.
console.log(result2); 


// Use of i insensitive
let reg3 = /harry/i;  // i means case insensitive.

let s3 = "This is great code HaRry bhai! Good job harry."

let result3 = reg3.exec(s3);
console.log(result3); 

// 2. test() = Returns true or false
let result4 = reg.test(s);
console.log(result4);  // This will only print true if reg is there in string s or else false.

// 3. match() = It will return an array of results or null.
// let result5 = reg.match(s)  // This is wrong
let result5 = s.match(reg2)  // This is right
console.log(result5);  // requires g (gloabal scope to get array of all results).

// 4. search() = Return index of first match or else -1
// let result6 = reg.match(s)  // This is wrong
let result6 = s.search(reg)  // This is right
console.log(result6);

// 5. replace() = Returns new replaced string with all replacements, (requires g (global scope) to replace all occurences.)

let result7 = s.replace(reg2, "SHUBHAM");  // Will replace all reg wil SHUBHAM
console.log(result7);