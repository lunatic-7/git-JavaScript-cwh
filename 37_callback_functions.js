console.log("Callback is nothing more than function inside a function!");

// Callback function : Functions inside a function is called callback function.

// Assume that this data is fetched from the server.
let students = [
    {name: "Harry", sub: "English"},
    {name: "Cas", sub: "Python"}
];

// So, here if we haven't used callback function, then we won't be able to get the name of newly enrolled student on the DOM, bc getStudent's timeout is taking 1 sec and setStudent is taking 3 sec, So, students will be fetched first and enrolled later. So, we needed to use callback function to get all the names, or change the timing of timeouts.

// This will enroll new students.
function setStudent(student, callback) {
    setTimeout(() => {
        student.forEach(element => {
            students.push(element);        
        });
        console.log("Student has been enrolled!");
        callback();
    }, 3000);
}

// This will get students and print them on DOM.
function getStudent() {
    setTimeout(() => {
        let str = "";
        students.forEach(element => {
            console.log(element);
            str += `<li> ${element.name}: ${element.sub}</li>`;
        });
        document.getElementById("student").innerHTML = str;
        console.log("Students have been fetched!");
    }, 1000);
}

let newStudent = [{name: "Wasif", sub: "C++"},
                  {name: "Ray", sub: "Rust"}
];
setStudent(newStudent, getStudent);