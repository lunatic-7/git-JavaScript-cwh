console.log("Prtotype inheritence");

const proto = {

    slogan: function () {
        return `This company is the best!`;
    },
    changeName: function (newName) {
        this.name = newName;
    }
}

// This creates harry object
let harry = Object.create(proto);
harry.name = "Harry";
harry.role = "Programmer";

console.log(harry);
harry.changeName("Harry2");
console.log(harry.name);

// Another (Old) method to create harry object
const harry1 = Object.create(proto, {
    name: {value: "Wasif", writable: true},
    role: {value: "Hacker"}
})

console.log(harry1);
harry1.changeName("Cas");
console.log(harry1);

// Employee Constructor

function Employee(name, salary, experience) {
    this.name = name;
    this.salary = salary;
    this.experience = experience;
}

// Slogan
Employee.prototype.slogan = function () {
    return `This company is the best. Reagrds, ${this.name}!`;
}

let harryObj = new Employee("Harry", 270000, 7);
console.log(harryObj);
console.log(harryObj.slogan());

// Programmer (Inherting properties from Employee constructor)
function Programmer(name, salary, experience, language) {
    Employee.call(this, name, salary, experience);
    this.language = language;
}

// Inherit the prototype
Programmer.prototype = Object.create(Employee.prototype);

// Manually set the constructor
Programmer.prototype.constructor = Programmer;

let rohan = new Programmer("Rohan Das", 70, 0, "JavaScript");
console.log(rohan);
console.log(rohan.slogan());