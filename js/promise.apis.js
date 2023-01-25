// promise.all() is used to run all the promise objects all at the same time and execute al promises as they complete
// Promise.race() is used to run all the promises at the same time and only execute the promise that completes first.

let makeVideoOne = new Promise((resolve, reject) => {
//   resolve("video One made");
  setTimeout(() => {
      // resolve("video One made");
      reject("video one not made")
  }, 5000);
});

let makeVideoTwo = new Promise((resolve, reject) => {
    // resolve("video Two made");
    setTimeout(() => {
        resolve("video Two made");
    }, 3000);
});

let makeVideoThree = new Promise((resolve, reject) => {
//   resolve("video Three made");
  setTimeout(() => {
    resolve("video Three made");
}, 5000);
});





// promise.all()
// Promise.all([
//     makeVideoOne, 
//     makeVideoTwo, 
//     makeVideoThree])
// .then((message) => {
//   console.log(message);
//     message.forEach((element)=>{
//         console.log(element);
//     })

// });



// promise.race()
// Promise.race([
//     makeVideoOne, 
//     makeVideoTwo, 
//     makeVideoThree])
// .then((message) => {
//   console.log(message);
// });



// promise.allSettled()
// Promise.allSettled([
//   makeVideoOne, 
//   makeVideoTwo, 
//   makeVideoThree])
// .then((message) => {
// console.log(message);
// });



// promise.any()
// Promise.any([
//   makeVideoOne, 
//   makeVideoTwo, 
//   makeVideoThree])
// .then((message) => {
// console.log(message);
// });



// promise.resolve()
// Promise.resolve(6).then((value)=>{
//   console.log(value)
// })



// promise.resolve()
Promise.reject(new Error).then((value)=>{
  console.log(value)
})
