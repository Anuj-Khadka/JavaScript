// snake drinks water 
// gun kills snake 
// water drowns gun 

let choices = ["s", "g", "w"]
// let computer_move = Math.floor(Math.random() * choices.length)
// console.log(choices[computer_move])           //array[index]

for(let i = 1; i<=5; i++){
    let computer_move = Math.floor(Math.random() * choices.length)
    computer_move = choices[computer_move]
    console.log(computer_move)

    // let player_move = "s"
    let player_move = prompt("enter a choice s, w or g").toLowerCase()

    
    if(!(choices.includes(player_move))){
        console.warn("enter a valid number");
    }

    console.log(typeof computer_move)
    console.log(typeof player_move)
    if(computer_move == player_move){
        console.log("tie");
    }
    else if((computer_move == "s" && player_move == "w") || (computer_move == "w" && player_move == "g") || (computer_move == "g" && player_move == "s")){
        console.log("you lost")
    }
    else if((computer_move == "w" && player_move == "s") || (computer_move == "g" && player_move == "w") || (computer_move == "s" && player_move == "g")){
        console.log("you won")
    }


}




