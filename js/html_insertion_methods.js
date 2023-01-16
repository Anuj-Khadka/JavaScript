// html insertion methods 

let container = document.getElementById("container")
let tableElement = document.getElementById("table");
let tbody = document.getElementById("tbody");

console.log(container);

let div = document.createElement("div");
div.innerHTML = `<b>this is a newly added div</b>`
div.setAttribute("class", "child-div")
div.setAttribute("style", "background: #f1f2f3;")

// container.appendChild(div);
// container.prepend(div);              // adds at the first child of element
// container.before(div)                   //adds before the element
container.after(div);
// container.replaceWith(div)

