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





//Create, remove and Replace element

// Creating Element 

// let element = document.createElement('li');
// element.className = 'items';
// element.id = 'item';
// element.setAttribute('title', 'mytitle');
// console.log(element);
// element.innerText = 'This is added using js'
// // or 
// // let text = document.createTextNode('this is alternately added using js')
// // element.appendChild(text);
// let list = document.querySelector('ul.list');
// console.log(list);
// list.appendChild(element);


// // Replace 
// let element2 = document.createElement('h1');
// element2.className='heading'
// element2.id='heading'
// let textnode= document.createTextNode('this is a replacing with js')
// element2.appendChild(textnode);
// element.replaceWith(element2);

// //replacing child
// let mylist = document.getElementById('mylist');
// let innertext= document.createTextNode('this is replaced child whith js');
// mylist.replaceChild(element, mylist.firstElementChild);
// console.log(mylist);
// mylist.removeChild(document.getElementById('list4'));

// //Attribute
// let work=document.createElement('a');
// work.setAttribute('id', 'newlist');
// work.setAttribute('href','https://www.codewithharry.com');
// let isTrue = work.hasAttribute('href');
// let text=document.createTextNode('GOTO codewithharry.com');
// work.appendChild(text);
// console.log('work');
// mylist.appendChild(work);
// console.log("work has href =", isTrue)