console.log("Functions...");

let name = "Wasif"
let name2 = "Cas"

// Function without return value
function greet(name, thank = 'Thanks a lot!') {  // Here we have set default value of thanks to thanks a lot.
    console.log(`Happy Birthday Dear ${name}, May God! Bless you ${thank}`);
}

// Function with return value
function play(player) {
    let p = `${player} is the best player of Cricket!`;
    return p;
}

// Another way to write same function
const letsPlay = function (player) {
    let p = `${player} is the best player of Cricket!`;
    return p;
}

greet(name, "Thank you!");
greet(name2);

let vari = play(name);
console.log(vari);
let vari2 = letsPlay(name)
console.log(vari2);

// Function inside an object
const myObj = {
    name: "Wasif",
    age: 100,
    prof: function () {
        return "Ethical Hacker!";
    }
}

console.log(myObj.prof());

// Scope

// let/const have block level scope.
// var has function level scope.

if(1){
    var i =234;  // Can't use let here, let is only for the block, wheras we can access var globally
    console.log(i)
}

console.log(i);

function ui(name)
{
    let i = 9;
    console.log(i);
    return `This is a ${name} ui`;
}

console.log(ui("harry"), i)