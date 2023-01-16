let classMethod = document.getElementById("class-method")

console.log(classMethod.classList)
classMethod.className = "contain old ms-5"
console.log(classMethod.classList)
classMethod.setAttribute("style", "background: red;")

classMethod.addEventListener('click', ()=>{
    classMethod.classList.toggle("ms-5");
    let contain = classMethod.classList.contains("clicked");
    if(contain){
        classMethod.classList.remove("clicked");
    } else{
        classMethod.classList.add("clicked");
    }
    classMethod.removeAttribute("style");
})