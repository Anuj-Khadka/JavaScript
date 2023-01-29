// functions 
greet()
// greet2()
function greet(){
    console.log("this will hoist when referenced above")
}

let greet2 = ()=>{
    console.log("this will not hoist when referenced above")
}



// var, let const
// console.log(unknown)
// console.log(varing)
// console.log(letting)
// console.log(consting)

var varing = "var hoisting";
var letting = "let hoisting";
var consting = "const  hoisting";

console.log(varing)
console.log(letting)
console.log(consting)