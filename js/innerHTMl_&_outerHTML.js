let container = document.getElementById("container")
let tableElement = document.getElementById("table");
let tbody = document.getElementById("tbody");

// innerHTML
// console.log(tbody.innerHTML)

let para = `<p> this is a paragraph to include with the tbody element`
tbody.innerHTML += para;
tbody.innerHTML = para;

// console.log(tbody.innerHTML);



// outerHTML

let carousel = `<div>hello</div>`

console.log(container.outerHTML)
container.outerHTML = carousel;

console.log(container.outerHTML)


// textContent 

console.log(container.textContent)

container.textContent = "what is this?s"

console.log(container.textContent)
