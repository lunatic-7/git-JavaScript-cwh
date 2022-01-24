console.log("Welcome to tutorial 24");

let today = new Date();  // To show current date
// console.log(typeof today);

// Can set date and time like this
let otherDate = new Date('8-4-2003 04:54:08');
// otherDate = new Date('June 13 1976');
// otherDate = new Date('09/16/1976');
console.log(otherDate);
let a;

// get date, day etc. seperately.
a = otherDate.getDay();  // Starts from Sunday == 0
a = otherDate.getDate(); 
a = otherDate.getMinutes();
// a = otherDate.getSeconds();
// a = otherDate.getHours();
a = otherDate.getTime();
a = otherDate.getMilliseconds();
a = otherDate.getMonth();  // Starts from January == 0
console.log(a);

// To set date, day, time etc.
otherDate.setDate(23);
otherDate.setMonth(0);
otherDate.setFullYear(1900);
otherDate.setMinutes(2);
otherDate.setHours(1);
otherDate.setSeconds(3);
console.log(otherDate);
 