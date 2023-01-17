console.log('welcome');

/*
document.getElementById('heading').addEventListener('click', function(e){               // e is event object 
    console.log('clicked successfully');
    // location.href='https://www.google.com';
    // console.log(e);
    let varible = e.target;
    varible = e.target.className;
    varible = e.target.id;
    varible = e.offsetX;
    varible = e.offsetY;
    varible = e.clientX;
    varible = e.target.classList;
    varible = Array.from(e.target.classList);
    varible = e;
    console.log(varible); 
})
*/

// MOre on Event  
/*
document.querySelector('#btn').addEventListener('click', func1)
function func1(e){
    console.log('this is a click event in JS');
    e.preventDefault();
}
document.querySelector('#btn').addEventListener('dblclick', func2)
function func2(e){
    console.log('this is double click in JS',e);
    e.preventDefault();
}
document.querySelector('.container').addEventListener('mouseover',(e)=>{
    console.log('this is on mouse over');
})
document.querySelector('.container').addEventListener('mouseleave',(e)=>{
    console.log('this is on mouseleave event')
})
document.querySelector('.container').addEventListener('mouseenter',(e)=>{
    console.log('this is on mouse enter')
})
*/

//SOme Self Exercise
// let getEvent= document.querySelector('.container');
/*
getEvent.addEventListener('mouseenter',()=>{
    console.log('mouseenter');
    getEvent.style.backgroundColor='red';
    getEvent.style.transition='all .5s ease';
    getEvent.style.border='solid 2px magenta';
    getEvent.style.transform='scale(1.03)';
})
getEvent.addEventListener('mouseleave',()=>{
    console.log('mouse leave');
    getEvent.style.backgroundColor='green';
    getEvent.style.transition='all .52s ease';
    getEvent.style.transform='scale(1)';
    getEvent.style.border='none';
})
*/







getEvent.addEventListener('mouseover',(e)=>{
    let sub= e.offsetX - e.offsetY;
    getEvent.style.backgroundColor=`rgba(${e.offsetX},${sub},${e.offsetY},0.6)`;
})
getEvent.addEventListener('mouseleave',()=>{
    getEvent.style.backgroundColor='transparent';
})


document.querySelector('#bton').addEventListener('click',(e)=>{
    document.querySelector('.editable').setAttribute('contenteditable', 'true');
})
Footer







let area = document.getElementById("area")
let btn = document.getElementById("btn")
let container = document.getElementById("container")
console.log(area , btn, container)

// old way 
btn.onclick = function (e) {
    alert("clicked")
}

// another way 
area.addEventListener('mouseover', (e)=>{
    console.log("Client: ", e.clientX, e.clientY)
    console.log("screen: ", e.screenX, e.screenY)
    console.log("offset: ", e.offsetX, e.offsetY)
    console.log(e)
})

let bod = function(){
    console.log("key press");
}

container.addEventListener('contextmenu', bod);