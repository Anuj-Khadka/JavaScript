let container = document.getElementById("container")
let tableElement = document.getElementById("table");
let tbody = document.getElementById("tbody");

// matches : checks if the element has given css selector or not.
console.log(tableElement.matches("#table"));
console.log(tableElement.matches("#tbody"));

// closest : returns the closest ansestor of the element, including itself.
console.log(tbody.closest("#tbody"));
console.log(tbody.closest("#thead"));


// contains : checks if the element has any child or descendent element with given css selector 
console.log(container.contains(tbody));
console.log(tableElement.contains(tbody));