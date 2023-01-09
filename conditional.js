/*

// if statement 

let age=18;
if(age==18){
    console.log('vote')
}
*/



/*

// if_else statement

let varible='var';
if(varible != undefined){
    console.log('exists')
}
else{
    console.log('Doesn\'t exist')
}
*/

/*
let user = true;
if(user){
    console.log('access')
}
else{
    console.log('get lost')
}
*/



/*

// else if statement 

let num=0;
if(num<0){
    console.log('negative')
}
else if(num>0){
    console.log('positive')
}
else{
    console.log('zero')
}
*/



/*
let user=true;
let varible='var';
if(user && varible != undefined){
    let myhtml = `the ${ varible} exists and the ${user} is true`
    // console.log('it works')
    document.body.innerHTML = myhtml
}
else{
    console.log('try again')
}
*/

/*
let age=18;
console.log((age==45)? 'true':'false');
*/

/*
array=['anme', 'game', 'bame', 'fame']
if(array.includes('fame')){
    console.log(true)
}
else{
    console.log(false)
}
*/



// Switch

let age = 40;
switch (age) {
  case 18:
    console.log(`you are ${age} years old`);
    break;
  case 20:
    console.log(`you are ${age} years old`);
    break;
  case 30:
    console.log(`you are ${age} years old`);
    break;
  case 40:
    console.log(`you are ${age} years old`);
    break;
  case 50:
    console.log(`you are ${age} years old`);
    break;
  default:
    console.log("user age unknown");
    break;
}