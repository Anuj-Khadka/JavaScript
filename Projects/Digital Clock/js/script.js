// cretate a digital clock using setinteral and date object.

let hourTime = document.getElementById("hour-time");
let minuteTime = document.getElementById("minute-time");
let secondTime = document.getElementById("second-time");

let convertedHour;

let time = function(){
    let date = new Date();
    dateHour = date.getHours();
    dateMinute = date.getMinutes();
    dateSecond = date.getSeconds();
    if (dateSecond < 10) {
        secondTime.textContent = `0${dateSecond}`;
    } else{
        secondTime.textContent = dateSecond;
    }
    if (dateMinute < 10) {
        minuteTime.textContent = `0${dateMinute}`;
    } else{
        minuteTime.textContent = dateMinute;
    }
    if(dateHour > 12) {
        convertedHour = dateHour - 12;
        hourTime.textContent = convertedHour;
    }
    if (dateHour < 10) {
        hourTime.textContent = `0${dateHour}`;
    }
    if (convertedHour < 10) {
        hourTime.textContent = `0${convertedHour}`;
    }
}


let setTime = setInterval(time, 1000);