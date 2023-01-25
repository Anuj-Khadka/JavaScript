// example 1

// let promice = new Promise((resolve, reject)=>{
//     let sum = 1 + 1;
//     if (sum == 2){
//         resolve("yes it is corect");
//     } else{
//         reject("nope, it is incorrect");
//     }
// })


// promice.then((value)=>{
//     console.log("the promise was success", value)
// }, (error)=>{
//     console.log("the promice was failed", error);
// });






// example 2

// let p = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         resolve("the function ran")
//     }, 3000);
// })

// p.then((message)=>{
//     console.log("resoved, ", message)
// })
// p.catch((error)=>{
//     console.log("rejected, ", error);
// })







// example 3

function loadScript(source){
    return new Promise((resolve, reject)=>{
    let script = document.createElement("script")
    script.src = source;
    script.onload = function(){
        resolve(script);
    }
    script.onerror = function(error){
        reject("there was an error", error);
    }
    document.body.appendChild(script);
})}

loadScript("../js/event_handling.js").then((value)=>{
    console.log(value);
}).catch((error)=>{
    console.log(error);
})