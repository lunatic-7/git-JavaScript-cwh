console.log("It's prototype time!");

// Object literal  (Object.prototype)

// Prototypes are nothing just the predefined functions and methods which an object have in Javascript.

let myObj = {
    name: "Wasif",
    work: "Hacker",
    Address: "Mars"
}

console.log(myObj);

// Objects created by contructors doesn't have object prototypes but, we can make our own prototypes for them.

function Obj(givenName, place) {
    this.name = givenName;
    this.address = place;
}

obj1 = new Obj("Wasif", "Saturn");
console.log(obj1);

// Making our own prototype.

// A prototype to return name.
Obj.prototype.getName = function () {
    return this.name;
}

// A prototype to set a new name.
Obj.prototype.setName = function (newName) {
    this.name = newName;
}

console.log(obj1.getName());
obj1.setName("Casanova...")
console.log(obj1.name);  // name changed.