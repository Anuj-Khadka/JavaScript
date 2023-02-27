let dropDown = document.getElementById("dropdown");
let dropToggle = document.getElementById("dropdown-toggle")

// matches --- chacks if the css selector is in the element or not 
console.log(dropDown.matches(".nav-item"))

// contains --- checks if the element itseeeelf or its decsendent has the selctor 
console.log(dropDown.contains(dropToggle))


// closests --- returns the element, which is an anscestor or descendent, that has the selector 
console.log(dropDown.closest(".nav-item"))


dropDown.addEventListener("select", ()=> {
    document.dropDown.style.background = orange;
})