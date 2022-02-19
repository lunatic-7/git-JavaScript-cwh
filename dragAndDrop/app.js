console.log("Drag and Drop");

const imagebox = document.querySelector(".imagebox");
const whiteboxes = document.getElementsByClassName("whitebox")


// Event listeners for draggable elements imagebox
imagebox.addEventListener("dragstart", (e) => {
    console.log("dragstart has been triggered!");
    e.target.className += " hold"; // this space is necessary to add more classes
    setTimeout(() => {
        e.target.className = 'hide';
    }, 0); // set timeout 0 indicates that process this particular code in the end.
})

imagebox.addEventListener("dragend", (e) => {
    console.log("dragend has been triggered!");
    e.target.className = "imagebox";
})

for (const whitebox of whiteboxes) {
    whitebox.addEventListener("dragover", (e) => {
        console.log("dragover has been triggered!");
        e.preventDefault();  // we can't trigger drop by default, so we need to prevent this default behaviour for it.
    })

    whitebox.addEventListener("dragenter", (e) => {
        console.log("dragenter has been triggered!");
        e.target.className += " dashed"
    })

    whitebox.addEventListener("dragleave", (e) => {
        console.log("dragleave has been triggered!");
        e.target.className += "whitebox";
    })

    whitebox.addEventListener("drop", (e) => {
        console.log("drop has been triggered!");
        e.target.append(imagebox);
    })
}