console.log('This is tutorial 60');
// Destructuring in JavaScript

let a, b;
[a, b] = [34, 564];
console.log(a, b);

[a, b, c, ...d] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];  // a, b, c will take 1 2 and 3 respectively and rest of the values will be stored in d.
console.log(a)
console.log(b)
console.log(c)
console.log(d)


// Array Destructuring
// ({e, f, g, ...h } = { e: 34, f: 345, g: 67, h: 45, i: 34 });
// console.log(e, f, g, h);

const fruits = ['Apple', 'Bananas', 'Mangoes'];
[a, b, c] = fruits;
console.log(a, b, c)


// Object Destructuring
const laptop = {
    model: "HP Pavilion",
    age: "23 days",
    gender: "Male",
    net: 1233,
    start: function () { console.log('started'); }
}

const { model, age, gender, net, start } = laptop;
console.log(model, age, gender, net, start);
start()