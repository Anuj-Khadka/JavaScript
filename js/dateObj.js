// let forget = document.getElementById('forget');
// forget.addEventListener('click', (e)=>{
//     let box = document.getElementById('cont');
//     console.log(box);
//     box.style.backgroundColor = 'red';
// });

let newDate = new Date();
newDate = new Date("04-15-2021 4:57:24");
newDate = new Date("june 23 2003");
newDate = new Date("12/23/2021"); //mm/dd/yyyy
newDate = new Date("23 june 2034 12:12:12");
newDate = new Date(1999,12,23,12,1,13,11);
console.log(newDate);

//get time
let time = newDate.getFullYear();
time = newDate.getDate();
time = newDate.getTime();
console.log(time);

// set time
let set = newDate.setDate(12);
set = newDate.setFullYear(1999);
console.log(set);