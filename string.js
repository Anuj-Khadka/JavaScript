// Strings: Properties, Methods & Template Literals in JavaScript

console.log('hello world')

let name1= 'ANUJ';
let surname='KHADKA';
console.log(name1 + ' ' + surname)



// String Methods 
/*
let html;
html= '<li> this is a list item</li> ' +
        '<p>this is a paragraph</p>'
console.log(html)
console.log(html.concat('this is a concatenated item'))
console.log(html.length);
console.log(html.toUpperCase());
console.log(html.toLocaleUpperCase());
console.log(html.toLowerCase());
console.log(html[13]);
console.log(html.indexOf('l'));
console.log(html.indexOf('list'));
console.log(html.indexOf('ul'))   ;                          // returns -1 is 'char' not found
console.log(html.lastIndexOf('li'));                       // gives the last 'char' available
console.log(html.endsWith('item'));                       // gives true or false is 'char' is the last element
console.log('substring ===>   ', html.substring(1,8));
console.log(html.substring(-7));
console.log('slice ===>   ',html.slice(1,7));
console.log(html.slice(-7));
console.log(html.replace('item', 'object'));
console.log(html.split(' '));
console.log(html.split('i'));
*/




// Template Literals 
/*
let firstName = 'Anuj',
lastName = 'Khadka';         
let greeting = `Welcome to ${firstName} ${lastName}`;
console.log(greeting);

let grade = 12;
let fruit= 'apple';
let myhtml=` Hello ${name1} ${surname},
 <span style='background:red;'>I am website and I heard that <span>
 <p>You read in grade ${grade} and like ${fruit}
 the 'innerHTML' works when the script is below the element in html`;
document.body.innerHTML = myhtml
*/




// escape sequence characters
let yourName = 'Remo D\'suza'       // here the backslace and double quote works as a single character known as escape sequence to just give " as a string.
console.log(yourName)