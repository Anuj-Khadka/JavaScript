// Varriables
// var, let, const

// var                                                  //var is a global scope
var yourName = "ANuj";
var $class = 12;        //used in JQuery
var _school;            //used in oops
console.log(yourName, $class, _school);

// const
const ownersName = "Anuj Khadka";
console.log(ownersName);

const array = [1, 2, 3, 4, 5, 6];
array.push(7);
// array=[100,99,98,97]
console.log(array);

// let
city = "Kathmandu";
{
  let city = "Pokhara"; //let is a local scope
  console.log(city);
}
console.log(city);





// Some Common Programming Type Cases:

var camelCase = "camelCase";
var PascalCase = "PascalCase";
// var kebabcase= ("Kebab-case");
var snake_case = "snake_case";
var UPPER_CASE_WITH_SNAKE_CASE = "UPPER_CASE_WITH_SNAKE_CASE";
console.log(
  camelCase,
  PascalCase,
  "kebab-case",
  snake_case,
  UPPER_CASE_WITH_SNAKE_CASE
);
