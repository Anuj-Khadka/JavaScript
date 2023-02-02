let date = new Date();

function alarmClock() {
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();

  console.log(hour, minute, second);

  if (hour == hr) {
    if (minute == min) {
      if (second >= sec) {
        console.log("alarm rings");
      }
    }
  }
}
    
let alarmTime = setInterval(alarmClock, 1000);
