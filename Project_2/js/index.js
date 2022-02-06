console.log("JavaScript Starting...");

// Todos
// 1. Store all data to the localStorage.
// 2. Give another column as an option to delete the book.
// 3. Add a scroll bar to the view.

// Constructor
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

// Display Constructor
function Display() {

}

// Add methods to display prototype
Display.prototype.add = function (book) {
    console.log("Adding to UI");
    tableBody = document.getElementById("tableBody");
    let uiString = `
                    <tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    </tr>`;
    tableBody.innerHTML += uiString;
}

// Implementing the Clear function
Display.prototype.clear = function () {
    let libraryForm = document.getElementById("libraryForm");
    libraryForm.reset();  // This clears and resets the all inputs.
}

// Implementing the Validate function
Display.prototype.validate = function (book) {
    if (book.name.length < 2 || book.author.length < 2) {
        return false;
    }
    else {
        return true;
    }
}

// Implementing Show function
Display.prototype.show = function(type, displayMessage) {
    let message = document.getElementById("message");
    message.innerHTML = `
        <div class="alert alert-${type} alert-dismissible fade show" role="alert">
            <strong>Message: </strong> ${displayMessage}
        </div>`;
            
    setTimeout(() => {
        message.innerHTML = '';
    }, 2000);
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