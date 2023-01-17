let tableElement = document.getElementById("table")
// let tbody = document.getElementById("tbody")


// setTimeout
console.log("this is set time out")

let setTimeOutFunction = (a, b)=>{
    console.log("I got printed late haha", a+b)
}

let setTimeOut = setTimeout(setTimeOutFunction, 3000, 2, 3);

console.log(setTimeOut)
// clearTimeout(setTimeOut);

document.write("I will be printed before settimeout, although the code is abouve me haha")




// setinterval 
let i = 1
setInterval(() => {
    console.log("I will be printed multiple time haha", i);
    i++;
}, 5000);

// clearInterval();