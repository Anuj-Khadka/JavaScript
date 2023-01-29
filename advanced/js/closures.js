// let givenName = "Anuj"
// function getName(){
//     givenName = "Krishna"
//     console.log(givenName);
//     {
//         givenName = "Algae"
//         console.log(givenName)
//     }
// }
// getName()





// function outerFunction(outerVariable){
//     console.log(outerVariable)
//     return function innerFunction(innerVariable) {
//         console.log("Outer Variable: ", outerVariable);
//         console.log("Inner Variable: ", innerVariable);
//         console.log(outerVariable)
//     }
// }
// // outerFunction("out")

// let newFunction = outerFunction("outer")
// console.log(newFunction("inner"))





function operation(){
    // private function
    let counter = 0;
    function changeBy(n){
        counter += n;
    }

    // accessible function
    return{
        increment:(n)=>{
            changeBy(n)
        },
        decrement:(n)=>{
            changeBy(-n)
        },
        value:()=>{
            return counter;
        }
    }
}

let perform = operation()
console.log(perform.value())
perform.increment(1)
console.log(perform.value())
perform.increment(5)
console.log(perform.value())
perform.decrement(5)
console.log(perform.value())
