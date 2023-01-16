let container = document.getElementById("container")
let tableElement = document.getElementById("table");
let tbody = document.getElementById("tbody");

let div = document.createElement("div");
div.innerHTML = `<b>this is a newly added div before the container opens</b>`
div.setAttribute("class", "child-div")
div.setAttribute("style", "background: #f1f2f3;")

container.insertAdjacentElement("beforebegin", div)
container.insertAdjacentHTML("beforeend", `<b>this is a newly added div before the container closes</b>`);
container.insertAdjacentHTML("afterbegin", `<b>this is a newly added div just as the container opens</b>`);
container.insertAdjacentHTML("afterend", `<b>this is a newly added div just as the container closes</b>`);afterend