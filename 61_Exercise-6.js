console.log("Wall clock");

function updateClock() {

    // Get current date
    let time = new Date();

    // Extract hours, minutes and seconds from current date
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    let t = document.getElementById("time");
    let div = "";

    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;

    // To display hours in Indian format
    hours = (hours > 12) ? hours - 12 : hours;
    hours = (hours == 0) ? 12 : hours;

    if (hours >= 12) {
        sec = "PM";
    }
    else {
        sec = "AM";
    }

    div += `<h4>${hours}:${minutes}:${seconds} ${sec}</h4>`;
    t.innerHTML = div;

    // console.log(`${hours}:${minutes}:${seconds} ${sec}`);
}