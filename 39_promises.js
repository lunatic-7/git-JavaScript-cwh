console.log("I will master JS, that's my promise.");

// func1 is gonna give promise here.
function func1() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            const error = true;  // We have set error to true
            if (!error) {
                console.log("Func1: Your promise has been resolved!");
                resolve()
            }
            else {
                console.log("Func1: Your promise can't be resolved!");
                reject("Couldn't resolve promise.")
            }
        }, 2000);
    })
}

func1().then(function () {  // then will be executed if promise is resloved.
    console.log("Harry: Thanks for resolving.");
}).catch(function (e) {  // catch will be excuted if promise is not resolved.
    console.log("Harry: Very bad bro, " + e);
})

// Assume that this data is fetched from the server.
let students = [
    { name: "Harry", sub: "English" },
    { name: "Cas", sub: "Python" }
];

// This will enroll new students.
function setStudent(student) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            student.forEach(element => {
                students.push(element);
            });
            console.log("Student has been enrolled!");

            const error = false;
            if (!error) {
                resolve();
            }
            else {
                reject();
            }
        }, 3000);
    })
}

// This will get students and print them on DOM.
function getStudent() {
    setTimeout(() => {
        let str = "";
        students.forEach(element => {
            // console.log(element);
            str += `<li> ${element.name}: ${element.sub}</li>`;
        });
        document.getElementById("student").innerHTML = str;
        console.log("Students have been fetched!");
    }, 1000);
}

let newStudent = [{ name: "Wasif", sub: "C++" },
{ name: "Ray", sub: "Rust" }
];
setStudent(newStudent).then(function () {
    getStudent();
}).catch(function () {
    console.log("Some ERROR occured!");
})