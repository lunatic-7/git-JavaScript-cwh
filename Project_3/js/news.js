console.log("This is News App created by me!");

// 2f7c12bb7c7b4b47b93254077620c729
let source = 'bbc-news';
let apiKey = '2f7c12bb7c7b4b47b93254077620c729';

// Grab the news container
let newsAccordion = document.getElementById("newsAccordion");

// Create the get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        console.log(json);
        console.log(json.articles);
        let articles = json.articles;

        let news = "";
        articles.forEach(function (element, index) {
            news += `<div class="accordion-item">
                <h2 class="accordion-header" id="heading${index}">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                        <b>Breaking News ${index + 1}:&nbsp;</b>${element.title}
                    </button>
                </h2>
                <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}"
                    data-bs-parent="#newsAccordion">
                    <div class="accordion-body">
                        ${element.content}... <a href="${element.url}" target="_blank">Read more</a>
                    </div>
                </div>
            </div>`;
        });

        newsAccordion.innerHTML = news;
    }
    else {
        console.log("Some error occured");
    }
}

xhr.send();

