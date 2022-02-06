console.log("Arrows are here!");

// Normal functions
const harry = function () {
    console.log("He is a good person!");
}

harry();

// Arrow functions
const wasif = () => {
    console.log("He is a good person as well!");
}

wasif();

// Normal functions returning something
const har = function () {
    return "Good morning";
}

console.log(har());

const was = () => {
    return "Good morning"
}

console.log(was());

// We can write the above code in 1 line as well: To return one liners we don't need to use curly brackets or return keyword.

const was2 = () => "Good morning - One liner";

console.log(was2());

// Arrow function with Objects.
const obj = () => ({  // To use Objects with arrow function we need to cover curly brackets inside normal brackets.
    name: "Wasif"
})

console.log(obj());  // Will give undefined

// Arrow function with parameters, With one parameter only we can avoid using brackets around name, but with 2 or more than two parameters we need to use brackets around them.
const para = name => {
    return "Good Morning " + name; 
}
console.log(para("Wasif"));

const para2 = (name, greet) => {
    return "Good Morning " + name + greet;
}
console.log(para2("Cas", " Bye"));