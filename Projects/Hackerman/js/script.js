let usernameBox = document.getElementById("enter-username");
let usernameForm = document.getElementById("username-form");

usernameForm.addEventListener("submit", (e) => {
  let username = document.getElementById("username");
  e.preventDefault();
  let action = document.getElementById("actions");
  action.classList.remove("close");
  username.setAttribute("disabled", "true");
  
  hackChoiceLabel = document.getElementById("hack-choice-label");
  hackChoiceLabel.textContent = `${username.value}@hackerman:~$`;
});

let hackChoiceForm = document.getElementById("hack-choice-form");
hackChoiceForm.addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementById("hack-choice").setAttribute("disabled", "true");
  let victimAction = document.getElementById("victim-actions")
  victimAction.classList.remove("close");
});


let victimUsernameForm = document.getElementById("victim-username-form");
victimUsernameForm.addEventListener("submit",(e)=>{
  e.preventDefault();
  let hacking = document.getElementById("hacking");
  hacking.classList.remove("close");

  setTimeout(() => {
    let message2 = document.createElement("div");
    message2.classList.add("label");
    message2.innerText = "Sending Trojans..."
    hacking.appendChild(message2);
  }, 5000);

  setTimeout(() => {
    let message3 = document.createElement("div");
    message3.classList.add("label");
    message3.innerText = "Collecting data..."
    hacking.appendChild(message3);

  }, 10000);

  setTimeout(() => {
    let message4 = document.createElement("div");
    message4.classList.add("label");
    message4.innerText = "It may take some time..."
    hacking.appendChild(message4);

  }, 15000);

  setTimeout(() => {
    let message5 = document.createElement("div");
    message5.classList.add("label");
    message5.innerText = "wa baam..."
    hacking.appendChild(message5);

  }, 15000);

  // percent = 0
  // let counter = () => {
  //   let message5 = document.createElement("span");
  //   message5.classList.add("label");
  //   message5.textContent = percent++;
  //   hacking.appendChild(message5);

  // }
  // let mess5 = setInterval(counter, 200);
  // if(percent == 100){
  //   clearInterval(mess5);
  // }
})