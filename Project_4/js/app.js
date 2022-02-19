console.log("Form Validator");

const username = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
let validName = false;
let validEmail = false;
let validPhone = false;

// console.log(name, email, phone);

username.addEventListener("blur", () => {
    console.log("name is triggered");
    // Validate name here
    let regex = /^[a-zA-Z]([a-zA-Z0-9]){2,10}$/;
    let str = username.value;
    console.log(regex, str);

    if (regex.test(str)) {
        console.log("Name Matched!");
        username.classList.remove("is-invalid");
        validName = true;
    }
    else {
        console.log("Name didn't Match!");
        username.classList.add("is-invalid");
        validName = false;
    }
})

email.addEventListener("blur", () => {
    console.log("email is triggered");
    // Validate email here
    let regex = /^([-/.a-zA-Z0-9_]+)@([-/.a-zA-Z0-9_]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    console.log(regex, str);

    if (regex.test(str)) {
        console.log("Email Matched!");
        email.classList.remove("is-invalid");
        validEmail = true;
    }
    else {
        console.log("Email didn't Match!");
        email.classList.add("is-invalid");
        validEmail = false;
    }
})

phone.addEventListener("blur", () => {
    console.log("phone is triggered");
    // Validate phone here
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    console.log(regex, str);

    if (regex.test(str)) {
        console.log("Phone Matched!");
        phone.classList.remove("is-invalid");
        validPhone = true;
    }
    else {
        console.log("Phone didn't Match!");
        phone.classList.add("is-invalid");
        validPhone = false;
    }
})

let submit = document.getElementById("submit");
submit.addEventListener("click", (e) => {
    e.preventDefault();  // To prevent reloading.

    console.log("You clicked on Submit!");

    // Submit your form here

    if (validName && validEmail && validPhone) {
        let succcess = document.getElementById("success");
        succcess.classList.add("show");
        failure.classList.remove("show");
    }
    else {
        let failure = document.getElementById("failure");
        failure.classList.add("show");
        success.classList.remove("show");
    }

})