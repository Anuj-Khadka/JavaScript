// attribute methods

let container = document.getElementById("container");
let div = document.createElement("div");

div.innerHTML = `<b>this is a newly added div</b>`;
container.append(div);

console.log(div.hasAttribute("class"));
div.setAttribute("class", "child-div");
div.setAttribute("style", "background: #f1f2f3;");
console.log(div.getAttribute("style"));
console.log(div.attributes);
div.removeAttribute("class");
console.log(div.attributes);

div.setAttribute("data-game", "mario");
div.setAttribute("data-player", "anuj");
console.log(div.attributes);
console.log(div.dataset);
console.log(div.dataset.game);
