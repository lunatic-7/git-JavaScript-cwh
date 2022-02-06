console.log("Fetching API, New Method...");

// Button with id myBtn
let myBtn = document.getElementById("myBtn");

// div with id content
let content = document.getElementById("content");

// Fetching API using GET request.
function getData() {
    console.log("Started getData");
    url = "harry.txt";
    fetch(url).then((response) => {
        console.log("Inside First then");
        return response.text();
    }).then((data) => {
        console.log("Inside Second then");
        console.log(data);
    })
}

console.log("Before running getData");
getData();
console.log("After running getData");

function getData2() {
    url = "https://api.github.com/users";
    fetch(url).then((response) => {
        return response.json();  // using json instead text is necessary here to get parsed data.
    }).then((data) => {
        console.log(data);
    })
}

getData2();

// Fetching API using POST request
function postData() {
    url = "http://dummy.restapiexample.com/api/v1/create";
    data = 	'{"name":"Casanova877","salary":"123","age":"23"}'
    params = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: data  // We don't need to do JSON.stringify here as our data is already a string.
    }
    fetch(url,params).then(response => response.json()).then(data => console.log(data))
}

postData();