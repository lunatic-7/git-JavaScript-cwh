console.log("Regular Expression (Character Sets!");

// Character Sets - []

let regex = /h[a-z]rry/; // Can be any character from a to z
let str = "harry bhai!";

let result = regex.exec(str);
console.log("The result from exec is ", result);
if (regex.test(str)) {
    console.log(`The string ${str} matches the expression ${regex.source}`);
}
else {
    console.log(`The string ${str} does not match the expression ${regex.source}`);
}


regex = /h[aty]rry/; // Can be any a, t or y
str = "hyrry bhai!";

result = regex.exec(str);
console.log("The result from exec is ", result);
if (regex.test(str)) {
    console.log(`The string ${str} matches the expression ${regex.source}`);
}
else {
    console.log(`The string ${str} does not match the expression ${regex.source}`);
}


regex = /h[^aty]rry/; // Can be any, except a, t or y
str = "hzrry bhai!";

result = regex.exec(str);
console.log("The result from exec is ", result);
if (regex.test(str)) {
    console.log(`The string ${str} matches the expression ${regex.source}`);
}
else {
    console.log(`The string ${str} does not match the expression ${regex.source}`);
}


regex = /h[^aty]rr[yYu]/;
str = "hzrrY bhai!";

result = regex.exec(str);
console.log("The result from exec is ", result);
if (regex.test(str)) {
    console.log(`The string ${str} matches the expression ${regex.source}`);
}
else {
    console.log(`The string ${str} does not match the expression ${regex.source}`);
}


regex = /h[a-zA-z]rr[yu0-9][0-9]/;  // We can have as many character sets as we want.
str = "hArr79 bhai!";

result = regex.exec(str);
console.log("The result from exec is ", result);
if (regex.test(str)) {
    console.log(`The string ${str} matches the expression ${regex.source}`);
}
else {
    console.log(`The string ${str} does not match the expression ${regex.source}`);
}

// Quantifiers - {}
regex = /har{2}y/; // r can occur exactly two times.
str = "harry bhai!";

result = regex.exec(str);
console.log("The result from exec is ", result);
if (regex.test(str)) {
    console.log(`The string ${str} matches the expression ${regex.source}`);
}
else {
    console.log(`The string ${str} does not match the expression ${regex.source}`);
}


regex = /har{0,2}y/; // r can occur 0 to 2 times (0,1,2)
str = "hay bhai!";

result = regex.exec(str);
console.log("The result from exec is ", result);
if (regex.test(str)) {
    console.log(`The string ${str} matches the expression ${regex.source}`);
}
else {
    console.log(`The string ${str} does not match the expression ${regex.source}`);
}

// Groupings - ()
regex = /(har){2}/;  // It means har should occur 2 times.
str = "harhar bhai!";

result = regex.exec(str);
console.log("The result from exec is ", result);
if (regex.test(str)) {
    console.log(`The string ${str} matches the expression ${regex.source}`);
}
else {
    console.log(`The string ${str} does not match the expression ${regex.source}`);
}


regex = /(har){2}([0-9]r){3}/;
str = "harhar1r2r7r bhai!";

result = regex.exec(str);
console.log("The result from exec is ", result);
if (regex.test(str)) {
    console.log(`The string ${str} matches the expression ${regex.source}`);
}
else {
    console.log(`The string ${str} does not match the expression ${regex.source}`);
}
