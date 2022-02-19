console.log('This is tutorial 52 file');
// You have to crate an alarm clock in javascript (Use your creativity)
// Allow user to set alarm for a certain time

var x = document.getElementById("myAudio"); 

let y = document.getElementById("btn1");
let z = document.getElementById("btn2");

y.addEventListener('click', ()=>{
    x.play(); 
})

z.addEventListener('click', ()=>{
    x.pause(); 
})


// Alarm code starts here...

// Add a event listener to the submit button.
const alarmSubmit = document.getElementById("alarmSubmit");
alarmSubmit.addEventListener("click", setAlarm);

// Function to play alarm ringtone.
function ringBell() {
    x.play(); 
}

// This function will run whenver the alarm is set from the UI
function setAlarm(e) {
    
    e.preventDefault()
    const alarm = document.getElementById("alarm");
    alarmDate = new Date(alarm.value);
    console.log(`Setting Alarm... for ${alarmDate}`);
    now = new Date();

    let timeToAlarm = alarmDate - now; // This is miliseconds remaining for alarm.
    console.log(timeToAlarm);
    if (timeToAlarm >= 0) {
        setTimeout(() => {
            console.log("Ringing Now!");
            ringBell();
        }, timeToAlarm);
    }
}