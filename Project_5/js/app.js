console.log("This is CV Screener!");

// This data is an array of objects which contains information about the candidate.
const data = [
    {
        name: "Casanova",
        age: 20,
        city: "Sohna",
        language: "Python",
        framework: "React JS",
        image: "https://randomuser.me/api/portraits/men/75.jpg"
    },

    {
        name: "Esmerayyy",
        age: 17,
        city: "Islamabad",
        language: "JavaScript",
        framework: "Angular",
        image: "https://randomuser.me/api/portraits/women/67.jpg"
    },

    {
        name: "Lolita",
        age: 39,
        city: "London",
        language: "Go",
        framework: "Go framework",
        image: "https://randomuser.me/api/portraits/women/70.jpg"
    },

    {
        name: "Dunk",
        age: 31,
        city: "Ohio",
        language: "Java",
        framework: "JS",
        image: "https://randomuser.me/api/portraits/men/72.jpg"
    },

    {
        name: "John",
        age: 37,
        city: "Atalantas",
        language: "Rust",
        framework: "React native",
        image: "https://randomuser.me/api/portraits/men/33.jpg"
    }
]

// console.log(data.length);

// CV iterator
function cvIterator(profiles) {
    let nextIndex = 0;
    return {
        next: function () {
            return nextIndex < profiles.length ? { value: profiles[nextIndex++], done: false } : { done: true }
        }
    };
}

const candidates = cvIterator(data);
nextCV();

// Button Listener for next button
const next = document.getElementById('next');
next.addEventListener("click", nextCV);

function nextCV() {
    const currentCandidate = candidates.next().value;

    let image = document.getElementById("image");
    let profile = document.getElementById("profile");

    if (currentCandidate != undefined) {
        image.innerHTML = `<img src='${currentCandidate.image}'>`;

        profile.innerHTML = `<ul class="list-group">
                                <li class="list-group-item">Name: ${currentCandidate.name}</li>
                                <li class="list-group-item">${currentCandidate.age} years old.</li>
                                <li class="list-group-item">Lives in ${currentCandidate.city}</li>
                                <li class="list-group-item">Currently working on : ${currentCandidate.language}</li>
                                <li class="list-group-item">With ${currentCandidate.framework} framework.</li>
                            </ul>`;
    }
    else {
        alert("End of Candidte Application!");
        window.location.reload();
    }
}