let container = document.getElementById("container")

console.log(container.childNodes)       // returns all nodes including text, comment, elements etc.

console.log(container.firstChild)

console.log(container.lastChild)

console.log(container.firstElementChild)

console.log(container.hasChildNodes());

console.log(container.childNodes[4]) 

console.log(container.childElementCount) 

console.log(container.children)


// siblings
console.log(container.firstElementChild.nextElementSibling)
console.log(container.firstElementChild.nextSibling)

console.log(container.children[1])
console.log(container.children[1].previousElementSibling)


// parent
console.log(container.children[2].parentElement)
console.log(container.children[2].parentNode)