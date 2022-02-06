console.log("Starting OOP");

// Object literal for creating objects
let car = {
    name: "Ferrari",
    topSpeed: 370,
    run: function() {
        console.log("Car is running!");
    }
}

console.log(car);
console.log(car.name);
console.log(car.topSpeed);
car.run();

// We have already seen contructors like these (new is constructor here.)
let date = new Date();
// console.log(date);

// Creating a constructor for cars
function generalCars(givenName, givenSpeed) {
    this.name = givenName;
    this.speed = givenSpeed;
    this.run = function () {
        console.log(`${this.name} is running!`);
    }
    this.analyze = function () {
        console.log(`${this.name} is slower than Mercedes by ${200 - this.speed} Km/hr`);
    }
}

let car1 = new generalCars("Maruti 800", 70);
let car2 = new generalCars("Nissan", 150);
let car3 = new generalCars("Jaguar", 190);

console.log(car1, car2, car2);
console.log(car1.name);
console.log(car2.speed);
car3.run()
car1.analyze()
car2.analyze()
car3.analyze()
