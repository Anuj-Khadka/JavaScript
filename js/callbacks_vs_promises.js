let userLeft = false;
let userWatchingPromises = true;

// solving with callbacks
function workingWithCallback(watchingCallback, leftCallback) {
  if (userLeft) {
    leftCallback({
      value: "user left",
      emotion: ":/   sad",
    });
  } else if (userWatchingPromises) {
    watchingCallback({
      value: "you are watching promises in JS",
      emotion: ":) garden garden",
    });
  } else {
    watchingCallback({
      value: "video is over",
      emotion: "like share subscribe.",
    });
  }
}

workingWithCallback(
  (message) => {
    console.log(message.value, "feeling", message.emotion);
  },
  (error) => {
    console.log(error.value, "feeling", error.emotion);
  }
);





// solving with promise
function workingWithPromises() {
  return new Promise((resolve, reject) => {
    if (userLeft) {
      reject({
        value: "user left",
        emotion: ":/   sad",
      });
    } else if (userWatchingPromises) {
      resolve({
        value: "you are watching promises in JS",
        emotion: ":) garden garden",
      });
    } else {
      resolve({
        value: "video is over",
        emotion: "like share subscribe.",
      });
    }
  });
}

workingWithPromises()
  .then((message) => {
    console.log(message.value, "feeling", message.emotion);
  })
  .catch((error) => {
    console.log(error.value, "feeling", error.emotion);
  });
