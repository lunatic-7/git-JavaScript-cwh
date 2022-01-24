console.log('Heyooooo!');
let marks = [34, 23, 24, 84, 97, 32];
const fruits = ['Orange', 'Apple', 'Pineapple'];
const mixed = ['str', 98, [3, 5]];

const arr = new Array(23, 434, 21, 'Orange');  // To create an array.
console.log(marks);
console.log(mixed);
console.log(fruits[1]);  // To access 2nd element of fruits.

console.log(arr.length);  // To find length of array.
console.log(Array.isArray(arr));  // To check if it's an array.
arr[0] = 'harry';  // To change index 0 of arr
let arrelement = arr[0];
console.log('Element :', arrelement);
console.log(arr);

let value = marks.indexOf(73);  // To check index of given element.
console.log(value);

// Mutating or Modifying arrays

marks.push(3457);  // To append given element in the end of an array.
console.log(marks);
marks.unshift(122);  // To append given element in the beginning.
console.log(marks);
marks.pop();  // To remove element from the end.
console.log(marks);
marks.shift();  // To remove element from the beggining.
console.log(marks);
marks.splice(2, 3);  // 2nd index se lekr 3 element uda do.
console.log(marks);
marks.reverse();  // To reverse the element.
console.log(marks);
marks.sort()  // To sort the array.
console.log(marks);

let marks2 = [1, 2, 3, 7];
marks = marks.concat(marks2);  // To concatenate given array in the array.
console.log(marks);

let myobj = {
    'first name': 'Harry',
    channel: 'CodeWithHarry',
    isActive: true,
    marks: [1, 4, 43, 7]
}

console.log(myobj);

// To print value of given keys:
console.log(myobj['first name']);
console.log(myobj.channel);
console.log(myobj['channel']);