let arr = ["anuj", "algae", "brutpull"]
console.log(arr)

arr.forEach((element)=> console.log(element))



// callback for forEach

console.log("\ncallback for forEach\n");

const myForEach = (arr, cb)=>{
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        cb(element);
        // console.log(element)
        // return element;
    }
}
myForEach(arr, (element)=>{
    console.log(element);
})



// another example

function loadScript(source, cb){
    let script = document.createElement("script")
    script.src = source;
    script.onload = function(){
        console.log(script);
        cb();
    }
    // what if the parent function has error and you just run error catching...
    script.onerror = function(error){
        console.log("there was an error", error);
        cb();
    }
    document.body.appendChild(script);
}
function success(){
    console.log("successfully runned callback");
}

loadScript("../js/event_hdsandling.js", success);
