// let delay = (value) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(value);
//     }, 2000);
//   });
// };

// (async () => {
//   let hello = await delay("Hello");
//   console.log(hello);
//   let world = await delay("World");
//   console.log(world);
// })();




// average of numbers in array with spread syntax
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function avg({...arr}){
//     // console.log(arr)
//     let sum = 0;
//     let len = 0
//     for(i in arr){
//         sum += arr[i];
//         len ++
//     }
//     let average = sum/len;
//     return average
// }
// console.log(avg(arr));



// write a function which resolves a promise after n seconds; take n as the paramenter 
function resolveAtN(n){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("resolved after " + n + " seconds")
        }, n*1000);
    })
}

(async ()=>{
    let three = await resolveAtN(3)
    console.log(three)
    let five = await resolveAtN(5)
    console.log(five)
})()
