console.log("Regular Exppression Shorthand character classes...");

// Character Classes

let regex = /\war/;  // \w means word character => _ or alphabet or numbers

let str = "harhar1r2r7r bhai!";

let result = regex.exec(str);
console.log("The result from exec is ", result);
if (regex.test(str)) {
    console.log(`The string ${str} matches the expression ${regex.source}`);
}
else {
    console.log(`The string ${str} does not match the expression ${regex.source}`);
}


regex = /\w+ar/;  // one or more than one word character before ar.

str = "kjharhar1r2r7r bhai!";

result = regex.exec(str);
console.log("The result from exec is ", result);
if (regex.test(str)) {
    console.log(`The string ${str} matches the expression ${regex.source}`);
}
else {
    console.log(`The string ${str} does not match the expression ${regex.source}`);
}


regex = /\Wbhai/;  // \W means non word character

str = "kjharhar1r2r7r bhai!";

result = regex.exec(str);
console.log("The result from exec is ", result);
if (regex.test(str)) {
    console.log(`The string ${str} matches the expression ${regex.source}`);
}
else {
    console.log(`The string ${str} does not match the expression ${regex.source}`);
}


regex = /\W+bhai/;  // one or more than one non word character.

str = "kjharhar1r2r7r@#$ bhai!";

result = regex.exec(str);
console.log("The result from exec is ", result);
if (regex.test(str)) {
    console.log(`The string ${str} matches the expression ${regex.source}`);
}
else {
    console.log(`The string ${str} does not match the expression ${regex.source}`);
}


regex = /number \d786/; // \d means digit 

str = "kjharhar1r2r7r@#$ bhai number 9786012986!";

result = regex.exec(str);
console.log("The result from exec is ", result);
if (regex.test(str)) {
    console.log(`The string ${str} matches the expression ${regex.source}`);
}
else {
    console.log(`The string ${str} does not match the expression ${regex.source}`);
}


regex = /number \d+986/; // one or more digits before 986 

str = "kjharhar1r2r7r@#$ bhai number 9786012986!";

result = regex.exec(str);
console.log("The result from exec is ", result);
if (regex.test(str)) {
    console.log(`The string ${str} matches the expression ${regex.source}`);
}
else {
    console.log(`The string ${str} does not match the expression ${regex.source}`);
}


regex = /\D986/; // \D means non digit

str = "kjharhar1r2r7r@#$ bhai number 978601was986!";

result = regex.exec(str);
console.log("The result from exec is ", result);
if (regex.test(str)) {
    console.log(`The string ${str} matches the expression ${regex.source}`);
}
else {
    console.log(`The string ${str} does not match the expression ${regex.source}`);
}


regex = /\D+986/; // one or more non digits before 986

str = "kjharhar1r2r7r@#$ bhai number 978601was986!";

result = regex.exec(str);
console.log("The result from exec is ", result);
if (regex.test(str)) {
    console.log(`The string ${str} matches the expression ${regex.source}`);
}
else {
    console.log(`The string ${str} does not match the expression ${regex.source}`);
}


regex = /\ska 978/; // \s matches whitespace character

str = "kjharhar1r2r7r@#$ bhai number ka 978601was986!";

result = regex.exec(str);
console.log("The result from exec is ", result);
if (regex.test(str)) {
    console.log(`The string ${str} matches the expression ${regex.source}`);
}
else {
    console.log(`The string ${str} does not match the expression ${regex.source}`);
}


regex = /\s+ka 978/; // one or more than one whitespace character before ka 978

str = "kjharhar1r2r7r@#$ bhai number    ka 978601was986!";

result = regex.exec(str);
console.log("The result from exec is ", result);
if (regex.test(str)) {
    console.log(`The string ${str} matches the expression ${regex.source}`);
}
else {
    console.log(`The string ${str} does not match the expression ${regex.source}`);
}


regex = /\Ska 978/; // \S matches non whitespace character

str = "kjharhar1r2r7r@#$ bhai number7%_ka 978601was986!";

result = regex.exec(str);
console.log("The result from exec is ", result);
if (regex.test(str)) {
    console.log(`The string ${str} matches the expression ${regex.source}`);
}
else {
    console.log(`The string ${str} does not match the expression ${regex.source}`);
}


regex = /\S+ka 978/; // one or more than one non whitespace character before ka 

str = "kjharhar1r2r7r@#$ bhai number7%_ka 978601was986!";

result = regex.exec(str);
console.log("The result from exec is ", result);
if (regex.test(str)) {
    console.log(`The string ${str} matches the expression ${regex.source}`);
}
else {
    console.log(`The string ${str} does not match the expression ${regex.source}`);
}


regex = /4r5r\b/;  // Word boundary (new word should start after 4r5r) 

str = "kjharhar1r2r7r@#$ bhai4r5r number7%_ka 978601was986!";

result = regex.exec(str);
console.log("The result from exec is ", result);
if (regex.test(str)) {
    console.log(`The string ${str} matches the expression ${regex.source}`);
}
else {
    console.log(`The string ${str} does not match the expression ${regex.source}`);
}

// Assertions

regex = /\h(?=y)/;  // any y after h 

str = "kjharhyr1r2r7r@#$ bhai4r5r number7%_ka 978601was986!";

result = regex.exec(str);
console.log("The result from exec is ", result);
if (regex.test(str)) {
    console.log(`The string ${str} matches the expression ${regex.source}`);
}
else {
    console.log(`The string ${str} does not match the expression ${regex.source}`);
}


regex = /\h(?!y)/;  // any character except y after h 

str = "kjharhyr1r2r7r@#$ bhai4r5r number7%_ka 978601was986!";

result = regex.exec(str);
console.log("The result from exec is ", result);
if (regex.test(str)) {
    console.log(`The string ${str} matches the expression ${regex.source}`);
}
else {
    console.log(`The string ${str} does not match the expression ${regex.source}`);
}
