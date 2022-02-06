console.log("Ajax is here bro!");

let fetchBtn = document.getElementById("fetchBtn");
fetchBtn.addEventListener("click", buttonClickHandler);

function buttonClickHandler() {
    console.log("You have clicked the fetch Btn!");

    // Instantiate an XHR object
    let xhr = new XMLHttpRequest();

    // Open the Object
    xhr.open("GET", "harry.txt", true); // true means, Yes, we want an asynchronous request.

    // What to do on progress (Optional)
    xhr.onprogress = function () {
        console.log("On progress");
    }

    // Old function (Not used nowadays)

    // Value	State	                    Description
    // 0	    UNSENT	                    Client has been created. open() not called yet.
    // 1	    OPENED	                    open() has been called.
    // 2	    HEADERS_RECEIVED	        send() has been called, and headers and status are available.
    // 3	    LOADING	                    Downloading; responseText holds partial data.
    // 4	    DONE	                    The operation is complete.
    xhr.onreadystatechange = function () {
        console.log("Running State No. : ", xhr.readyState);
    }

    // What to do when responce is ready
    xhr.onload = function () {
        if (this.status === 200) {
            console.log(this.responseText);
        }
        else {
            console.log("Some ERROR occured!");
        }
    }

    // Send the request
    xhr.send();

    console.log("We are done."); // This will be printed before our data, As we have set
    // async (asynchronous) request to true in line 13, if we change it to false this will be
    // executed after our requested data.
}

let pop = document.getElementById('popBtn');
pop.addEventListener("click", popHandler);

function popHandler() {
    console.log("You have clicked the pop Btn!");

    // Instantiate an XHR object
    let xhr = new XMLHttpRequest();

    // Open the Object
    xhr.open("GET", "http://dummy.restapiexample.com/api/v1/employees", true); // true means, Yes, we want an asynchronous request.

    // What to do when responce is ready
    xhr.onload = function () {
        if (this.status === 200) {
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            let list = document.getElementById("list");
            str = "";

            for (key in obj) {
                str += `<li>${obj[key]} </li>`
            }

            list.innerHTML = str;
        }
        else {
            console.log("Some ERROR occured.");
        }
    }

    // Send the request
    xhr.send();

    console.log("We are done.");
}
