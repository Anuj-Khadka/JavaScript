let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("1st promise complete");
  }, 1000);
});

p1.then((value) => {
  console.log(value);
  let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("lol"));
      // resolve("2nd promise ran")
    }, 2000);
  });
  return p2;
})
  .catch((error) => {
    console.log(error);
  })
  // the code down below will still run
  .then((value) => {
    console.log("p2", value);
    return 5;
  })
  .then((value) => {
    console.log(value);
  });
// .catch((error)=>{
//     console.log("found an error: ", error)
// })
