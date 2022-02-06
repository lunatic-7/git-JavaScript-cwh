console.log("Classes Time!");

class Employee {
    constructor(name, experience, division) {
        this.name = name;
        this.experience = experience;
        this.division = division;
    }

    slogan() {
        return `I am ${this.name}, this company is the best!`;
    }

    joiningYear() {
        return 2022 - this.experience;
    }

    static add(num1, num2) {  // this static method is independent of created object, we can call it directly from class.
        return num1 + num2;
    }
}

let p1 = new Employee("Wasif", 7, "div");
console.log(p1);
console.log(p1.slogan());
console.log(p1.joiningYear());
console.log(Employee.add(7, 3));

// Inheriting from Employee class
class Programmer extends Employee {
    constructor(name, experience, division, language, github) {
        super(name, experience, division);
        this.language = language;
        this.github = github;
    }

    favoriteLanguage() {
        if (this.language == "python") {
            return "Python";
        }
        else {
            return "JavaScript";
        }
    }

    static multiply(num1, num2) {
        return num1 * num2;
    }
}

let p2 = new Programmer("Casanova", 10, "inp", "Rust", "Wasif1607");

console.log(p2);
console.log(p2.favoriteLanguage());
console.log(p2.slogan());  // Inerited from Employee.
console.log(Programmer.add(1,2));  // Inherited from Employee.
console.log(Programmer.multiply(7,3));