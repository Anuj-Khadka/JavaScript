// immediately invoked function expression

// normal function 

// function favNum(){
//     console.log("my fav number is 8")
// }
// favNum()

// let favNum = (num=3)=>{
//     console.log("my fav number is", num)
// }
// favNum(8)



// iffe

// (function(){
//     console.log("my fav number is 8")
// })()


// (favNum = (num=3)=>{
//     console.log("my fav number is ", num)
// })();
// favNum(8)






// trying with async/await 

let fun = ()=> {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("Promise resolved")
        }, 2000);
    })
}

// async function mun(){
//     let dun = await fun();
//     console.log(dun);
//     let bun = await fun();
//     console.log(bun);
// }
// mun()


(async ()=>{
    let dun = await fun();
    console.log(dun);
    let bun = await fun();
    console.log(bun);
})()
