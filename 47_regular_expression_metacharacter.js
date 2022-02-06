console.log("Regular Expression Metacharacters!");

let regex = /harry/;
let str = "harry means codewith harry";

let result = regex.exec(str);
console.log("The result from exec is ", result);
if (regex.test(str)) {
    console.log(`The string ${str} matches the expression ${regex.source}`);
}
else {
    console.log(`The string ${str} does not match the expression ${regex.source}`);
}

// Lets look into some metacharacter symbols

regex = /^harr/  //  means expression will match if string starts with.
str = "harry means codewith harry";

result = regex.exec(str);
console.log("The result from exec is ", result);
if (regex.test(str)) {
    console.log(`The string ${str} matches the expression ${regex.source}`);
}
else {
    console.log(`The string ${str} does not match the expression ${regex.source}`);
}

regex = /rry$/; // $ at the end of the string means "string ends with".
str = "harry means codewith harry";

result = regex.exec(str);
console.log("The result from exec is ", result);
if (regex.test(str)) {
    console.log(`The string ${str} matches the expression ${regex.source}`);
}
else {
    console.log(`The string ${str} does not match the expression ${regex.source}`);
}

regex = /h.rry/; // matches any and exactly one character in place of .
str = "haaarry means codewith h0rry";

result = regex.exec(str);
console.log("The result from exec is ", result);
if (regex.test(str)) {
    console.log(`The string ${str} matches the expression ${regex.source}`);
}
else {
    console.log(`The string ${str} does not match the expression ${regex.source}`);
}

regex = /h*rry/; // matches any 0 or more characters in place of *
str = "dhawewf32rry means codewith harry";

result = regex.exec(str);
console.log("The result from exec is ", result);
if (regex.test(str)) {
    console.log(`The string ${str} matches the expression ${regex.source}`);
}
else {
    console.log(`The string ${str} does not match the expression ${regex.source}`);
}

regex = /ha?rryi?k/; // a? and t? means that a and t characters are optional.
str = "hrryk means codewith harry";

result = regex.exec(str);
console.log("The result from exec is ", result);
if (regex.test(str)) {
    console.log(`The string ${str} matches the expression ${regex.source}`);
}
else {
    console.log(`The string ${str} does not match the expression ${regex.source}`);
}

regex = /h\*rry/; // It literally matches with *, here \ (backslash) neutralizes metacharacters.
str = "harry means codewith h*rry";

result = regex.exec(str);
console.log("The result from exec is ", result);
if (regex.test(str)) {
    console.log(`The string ${str} matches the expression ${regex.source}`);
}
else {
    console.log(`The string ${str} does not match the expression ${regex.source}`);
}
