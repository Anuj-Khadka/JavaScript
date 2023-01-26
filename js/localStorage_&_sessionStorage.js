// localStorage
localStorage.setItem("name", "anuj");

console.log(localStorage.getItem("name"));

let arr = ["apple", "banana", "mango"];

localStorage.setItem("fruits", JSON.stringify(arr));

console.log(localStorage.getItem("fruits"));

console.log(JSON.parse(localStorage.getItem("fruits")));

localStorage.removeItem("name");

localStorage.objWay = "it works";

// delete localStorage.objWay;
// localStorage.clear();




// sessionStorage
sessionStorage.setItem("sessioned", "yes")
sessionStorage.setItem("sessioned", "no")

window.addEventListener("storage", (e)=>{
    alert("value changed")
    console.log(e)
})