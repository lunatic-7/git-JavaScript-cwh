console.log("This is ES6 version of Project 2.");

class Book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}

class Display {

    // Implementing add function
    add(book) {
        console.log("Adding to UI");
        let tableBody = document.getElementById("tableBody");
        let uiString = `
        <tr>
        <td>${book.name}</td>
        <td>${book.author}</td>
        <td>${book.type}</td>
        </tr>`;
        tableBody.innerHTML += uiString;

        localStorage.setItem("lib", JSON.stringify(book));
    }


    // Implementing clear function
    clear() {
        let libraryForm = document.getElementById("libraryForm");
        libraryForm.reset();  // This clears and resets the all inputs.
    }

    // Implementing validate function
    validate(book) {
        if (book.name.length < 2 || book.author.length < 2) {
            return false;
        }
        else {
            return true;
        }
    }

    // Implementing show function
    show(type, displayMessage) {
        let message = document.getElementById("message");
        message.innerHTML = `
            <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                <strong>${(type === "success") ? "Success" : "Error"}: </strong> ${displayMessage}
            </div>`;

        setTimeout(() => {
            message.innerHTML = '';
        }, 2000);
    }
}

// Add Submit event listener to libraryForm
let libraryForm = document.getElementById("libraryForm");

libraryForm.addEventListener("submit", libraryFormSubmit);
function libraryFormSubmit(e) {
    console.log("You have submitted library form!");
    let name = document.getElementById("bookName").value;
    let author = document.getElementById("author").value;

    let fiction = document.getElementById("fiction");
    let programming = document.getElementById("computer");
    let cooking = document.getElementById("cooking");
    let type;

    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }

    let book = new Book(name, author, type);
    console.log(book);


    let display = new Display();

    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show("success", "Your book has been added successfully!");
    }
    else {
        display.show("danger", "Sorry you cannot add this book!");
    }

    e.preventDefault();  // To prevent default reloading behaviour of submit. 
}
