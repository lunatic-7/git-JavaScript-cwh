// console.log("Welcome to Magic Notes!");
showNotes();

// If user adds a note, add it to the localStorage

let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function (e) {

    let addTitle = document.getElementById("addTitle");
    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    myObj = {
        title: addTitle.value,
        txt: addTxt.value
    }

    notesObj.push(myObj);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    addTitle.value = "";
    // console.log(notesObj);
    showNotes();
})

// Function to show elements from loacalStorage
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    let html = "";

    notesObj.forEach(function (element, index) {

        html += `
        <div class="my-2 mx-2 card notecard" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">${element.title}</h5>
                  <p class="card-text">${element.txt}</p>
                  <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Node</button>
                </div>
        </div>
        `;
                  
    });
    let notesElm = document.getElementById("notes");
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `<b>Nothing to show! Use "Add a note" section to add notes!</b>`
    }
}

// Function to delete a note
function deleteNote(index) {
    // console.log("I am deleting", index);

    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}

// Searching...
let search = document.getElementById("searchTxt");
search.addEventListener("input", function () {
    
    let inputVal = search.value.toLowerCase();
    // console.log('Input event fired!', inputVal);
    let noteCards = document.getElementsByClassName('notecard');
    Array.from(noteCards).forEach(element => {
        
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        let titleTxt = element.getElementsByTagName("h5")[0].innerText;
        if (cardTxt.includes(inputVal) || titleTxt.includes(inputVal)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
        // console.log(cardTxt);
    });
})

/* Further Features:
1 Add title.
2.Mark a note as Important.
3.Seperate notes by user.
4. Sync and host to web server.
*/