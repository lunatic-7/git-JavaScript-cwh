console.log("PostMaster!");

// Utility functions:
// 1. Utility function to get DOM element from string
function getElementFromString(string) {
    let div = document.createElement("div");
    div.innerHTML = string;
    return div.firstElementChild;
}

// Initialize no of parameters
let addedParamCount = 1;

// Hide the parameters box initially
let parametersBox = document.getElementById("parametersBox");
parametersBox.style.display = "none";

// If the user clicks on params box, hide the JSON box
let paramsRadio = document.getElementById("paramsRadio");
paramsRadio.addEventListener("click", () => {
    document.getElementById("requestJsonBox").style.display = "none";
    document.getElementById("parametersBox").style.display = "block";
})

// If the user clicks on JSON box, hide the parameter box
let JsonRadio = document.getElementById("jsonRadio");
JsonRadio.addEventListener("click", () => {
    document.getElementById("parametersBox").style.display = "none";
    document.getElementById("requestJsonBox").style.display = "block";
})

// If the user clicks on + button add more parameters
let addParam = document.getElementById("addParam");
addParam.addEventListener("click", () => {
    let params = document.getElementById("params");
    let string = `<div class="row g-3 my-1">
                        <label for="url" class="col-sm-2 col-form-label">Parameter ${addedParamCount + 1}</label>
                        <div class="col-md-3">
                            <input type="text" class="form-control" id="parameterKey${addedParamCount + 1}" placeholder="Enter Parameter ${addedParamCount + 1} KEY">
                        </div>
                        <div class="col-md-3">
                            <input type="text" class="form-control" id="parameterValue${addedParamCount + 1}" placeholder="Enter Parameter ${addedParamCount + 1} VALUE">
                        </div>
                        <button class="btn btn-secondary col-md-1 deleteParam">-</button>
                    </div>`;
    // Convert the element string to DOM node
    let paramElement = getElementFromString(string);
    params.appendChild(paramElement);

    // Add an event listener to remove the parameter on clicking - button
    let deleteParam = document.getElementsByClassName("deleteParam");
    for (let item of deleteParam) {
        // console.log(item.parentElement);
        item.addEventListener("click", (e) => {
            e.target.parentElement.remove();
        })
    }
    addedParamCount++;
})

// If the user clicks on submit button
let submit = document.getElementById("submit");
submit.addEventListener("click", () => {
    // Show please wait! in the response box to request patience from the user.
    let spinner = `<div class="spinner-border text-light"></div>`;
    document.getElementById("responsePrism").innerHTML = `Please Wait! Fetching response... ${spinner}`;
    // document.getElementById("spinner").innerHTML = spinner;

    // Fetch all the values user has entered
    let url = document.getElementById("url").value;
    let requestType = document.querySelector("input[name='requestType']:checked").value;
    let contentType = document.querySelector("input[name='contentType']:checked").value;

    // If user has used params option instead of json, collect all the parameters in an object and then convert it into string.

    if (contentType == "params") {
        data = {};
        for (let i = 0; i <= addedParamCount; i++) {
            if (document.getElementById("parameterKey" + i) != undefined) {
                let key = document.getElementById("parameterKey" + i).value;
                let value = document.getElementById("parameterValue" + i).value;
                data[key] = value;
            }
        }
        data = JSON.stringify(data);
    }
    else {
        data = document.getElementById("requestJsonText").value;
    }

    console.log("URL is ", url);
    console.log("requestType is ", requestType);
    console.log("contentType is ", contentType);
    console.log("data is ", data);

    // If the request type is get, invoke fetch api to create a get request
    if (requestType == "GET") {
        fetch(url, {
            method: "GET",
        }).then(response => response.text()).then((text) => {
            document.getElementById("responsePrism").innerHTML = text;
            Prism.highlightAll();
        })
    }
    else {
        fetch(url, {
            method: "POST",
            body: data,
            headers: {
            'Content-type': 'application/json; charset=UTF-8',
            },
        }).then(response => response.text()).then((text) => {
            document.getElementById("responsePrism").innerHTML = text;
            Prism.highlightAll();
        })
    }
})