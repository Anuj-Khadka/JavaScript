// there are basiically many types of loops in javascript

// 1. for loop
// 2. while loop
// 3. do while loop
// 4. array loops( for_of, for_in, foreach)

//for loop

/*
let i=0
for(i; i<=100; i++){
        console.log(i);
};
*/

//While loop

/*
let j=0;
while(j<=10){
    console.log(j);
    j++;                                    // j+=1
}
*/

//Do-While Loop
/*
let x = 0;
do {
  console.log(x);
  x++;
} while (x <= 10);
*/

//Break and Continue Statement
/*
let a=0;
do {
    if(a===5){
        break;
    }
    console.log(a);
    a++;    
} while (a<=10);
let b=0;
do {
    if(b===5){
        b+=1;
        continue;
    }
    console.log(b);
    b++;
} while (b<=10);
*/

// loops with conditions

/*
let i=0;
for(i;i<=10;i++){
    if(i===3){
        break;
    }
    console.log(i);
}
let j=1;
for(j;j<=10;j++){
    if(j===8){
        // console.log('skips this iteration');
        continue;                                               //no need to write j++ becuse the iteration is already done in for
    }
    console.log(j)
}
*/

/*
let i=1;
while (i<=10) {
    console.log(i);
    i++;
}
let j=1;
while(j<=10){
    console.log(j);
    j++;                                  
}
*/

//Array

let array = [1, 2, 3, 6, 5, 4];
/*
array.forEach(function (element) {
    console.log(element)
})

for(let i=0; i<=array.length; i++){
    console.log(array[i])
}

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(element);
}

array.forEach(function (element, index, array) {                    //element= each_element, index= index of each element, array= array list
    console.log(element, index, array)
})
*/

//Object
let obj = {
  name: "Anuj Khadka",
  class: 12,
  address: "KTM",
  school: "CCRC",
  student: true,
};

for (key in obj) {
  console.log(`The ${key} is ${obj[key]}`);
}

for (element of array) {
  console.log(element);
}
