console.log("BOM");

// window
window.console.log(window);

// location
let locate = document.getElementById("location")
locate.addEventListener("click", ()=>{
    location.href = "https://google.com"
})

// let backWard = document.getElementById(backward)
// backWard.addEventListener("click", ()=>{
    history.go(-1);
    console.log("you go back")
// })