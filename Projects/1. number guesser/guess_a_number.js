console.log("enter a number 1 to 10");

let chances = 5;
let number = Math.random() * 10;

// for(let i=0; i<5; i++){
//     let guess = parseInt(prompt("Enter the guess"));
//     if (guess == number ){
//         console.log(`Yaa! you guessed it in ${i+1} chance.`);
//         break;
//     }
//     else if(guess > number){
//         console.log(`you guessed was higher than the answer. enter a lower value. \n${5-(i+1)} chances remain.`)
//     }
//     else if(guess < number){
//         console.log(`you guessed was lower than the answer. enter a higher value. \n${5-(i+1)} chances remain.`)
//     }
//     if(i == 4){
//         console.log("You could not make it well\ngame over")
//         console.log(`the number was ${number} lol`)
//     }
// }

console.log(number);