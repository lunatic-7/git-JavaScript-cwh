console.log("This Dictionary is created by Casanova...");

// You have pretend to use a word api which will contain an object and you have to print definition from all the results of that word api.
// YOu have to take input from an input tag.
// You have to print it in the dom
// If you are using bootstrap then its a plus.

let fetchBtn = document.getElementById("button-addon1");
fetchBtn.addEventListener("click", clickBtn);

let inp = document.getElementById("inp");

function clickBtn() {
    console.log("The button is clicked!");
    console.log(inp.value);

    let xhr = new XMLHttpRequest();
    xhr.open("GET", `https://api.dictionaryapi.dev/api/v2/entries/en/${inp.value}`, true);
    xhr.onprogress = function () {
        console.log("Fetching...");
    }
    xhr.onload = function () {
        if (this.status === 200) {
            console.log(JSON.parse(this.responseText));
            let obj = JSON.parse(this.responseText);
            // Fetching all the definitions
            let elm = document.getElementById("def");
            let str = "";
            obj[0].meanings[0].definitions.forEach(function (element, index) {
                str += `<tr>
                        <th scope="row">${index + 1}</th>
                        <td>${element.definition}</td>
                        </tr>`
                elm.innerHTML = str;
            });

            // Fetching origin
            let elm2 = document.getElementById("org");
            let str2 = "";
            str2 += `<tr>
                    <th scope="row">1</th>
                    <td>${obj[0].origin}</td>
                    </tr>`
                    elm2.innerHTML = str2;
            
            // Fetching part of speech
            let elm3 = document.getElementById("spch");
            let str3 = "";
            str3 += `<tr>
                    <th scope="row">${obj[0].meanings[0].partOfSpeech.toUpperCase()}</th>
                    </tr>`
                    elm3.innerHTML = str3;
            
            // Fetching synonyms
            let elm4 = document.getElementById("syn");
            let str4 = "";
            obj[0].meanings[0].definitions[0].synonyms.forEach(function (element, index) {
                str4 += `<tr>
                        <th scope="row">${index + 1}</th>
                        <td>${element}</td>
                        </tr>`
                        elm4.innerHTML = str4;
            });
            
            // Fetching antonyms
            let elm5 = document.getElementById("ant");
            let str5 = "";
            obj[0].meanings[0].definitions[0].antonyms.forEach(function (element, index) {
                str5 += `<tr>
                        <th scope="row">${index + 1}</th>
                        <td>${element}</td>
                        </tr>`
                        elm5.innerHTML = str5;
            });
            
            // Fetching examples
            let elm6 = document.getElementById("ex");
            let str6 = "";
            obj[0].meanings[0].definitions.forEach(function (element, index) {
                str6 += `<tr>
                        <th scope="row">${index + 1}</th>
                        <td>${element.example}</td>
                        </tr>`
                        elm6.innerHTML = str6;
            });
            // str += `<h4>Definition:</h4>
            //         <p> ---> ${obj[0].meanings[0].definitions}</p>`;
            // elm.innerHTML = str;

            let elm7 = document.getElementById("nan");
            let str7 = "";
            str7 += `<b>Yay! Here are your Results!</b>`;
            elm7.innerHTML = str7; 
        }
        else {
            console.log("Some ERROR occured");
            let str7 = "";
            let elm7 = document.getElementById("nan");
            // When someones gives any arbitrary input.
            str7 += `<b>You fool! There is no word like "${inp.value}"</b>`;
            elm7.innerHTML = str7;
        }
    }

    xhr.send()
}