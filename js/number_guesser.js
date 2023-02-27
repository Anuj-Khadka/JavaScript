let random_number = parseInt(Math.random(1,100)*100)
// console.log(random_number)

for(let i=1; i<=100; i++){
    let guess = parseInt(prompt("enter the number"))
    if( guess == random_number){
        console.log("yes you are right bro!")
        console.log(`you made it in ${100 - i} guesses.`)
        break;
    }
    else if(guess > random_number){
        console.log("the number is too big")
    }
    else if(guess < random_number){
        console.log("the number is too small")
    }


}