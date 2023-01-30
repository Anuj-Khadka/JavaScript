let usernameBox = document.getElementById("enter-username");
let usernameForm = document.getElementById("username-form");
let username = document.getElementById("username");

let savedUsername = localStorage.getItem("user");

if (savedUsername == null) {
  usernameForm.classList.toggle("close");

  usernameForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let action = document.getElementById("actions");
    action.classList.remove("close");
    username.setAttribute("disabled", "true");
    localStorage.setItem("user", username.value);
    hackChoiceLabel = document.getElementById("hack-choice-label");
    setTimeout(() => {
      hackChoiceLabel.textContent = `${username.value}@hackerman:~$`;
      hackChoiceLabel.setAttribute("autofocus", "true");
    }, 2000);
  });
} else {
  let action = document.getElementById("actions");
  action.classList.remove("close");
  username.setAttribute("disabled", "true");
  hackChoiceLabel = document.getElementById("hack-choice-label");
  let localUsername = localStorage.getItem("user")
  setTimeout(() => {
    hackChoiceLabel.textContent = `${localUsername}@hackerman:~$`;
    hackChoiceLabel.setAttribute("autofocus", "true");
  }, 2000);
}

let hackChoiceForm = document.getElementById("hack-choice-form");
hackChoiceForm.addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementById("hack-choice").setAttribute("disabled", "true");
  let victimAction = document.getElementById("victim-actions");
  victimAction.classList.remove("close");
});

let victimUsernameForm = document.getElementById("victim-username-form");
victimUsernameForm.addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementById("victim-username").setAttribute("disabled", "true");
  let hacking = document.getElementById("hacking");
  hacking.classList.remove("close");

  // setTimeout(() => {
  //   let message2 = document.createElement("div");
  //   message2.classList.add("label");
  //   message2.innerText = "Sending Trojans...";
  //   hacking.appendChild(message2);
  // }, 5000);

  function hackMessage(message, time) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let messageDiv = document.createElement("div");
        messageDiv.classList.add("label");
        resolve((messageDiv.innerText = message));
        hacking.appendChild(messageDiv);
      }, time * 1000);
    });
  }

  (async () => {
    let message1 = await hackMessage(`Initiating packets...`, 1);
    let message2 = await hackMessage("Connecting to the server...", 3);
    let message3 = await hackMessage("Server Connection Failed...", 3);
    let message4 = await hackMessage("Reconnecting to the server...", 1);
    let message5 = await hackMessage("Handshake with server successful ...", 3);
    let message6 = await hackMessage("Finding username...", 3);
    let message7 = await hackMessage("Sending Trojans...", 3);
    let message8 = await hackMessage("Fetching User info...", 3);
  })();
});
