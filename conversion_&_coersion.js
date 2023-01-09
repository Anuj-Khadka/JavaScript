// Conversion and Coersion

//String
/*
let numvar=String(13);
console.log(numvar, typeof(numvar));
let boolvar=true;
let boolstrvar=String(boolvar);
console.log(boolvar, typeof(boolstrvar))
let array=[1,2,3,4,5,6] 
console.log(array)
console.log(array.length, typeof array)
let strarray=array.toString()
console.log(strarray);
console.log(strarray.length, typeof strarray);
*/

//Number
/*
let str=Number('1234');
console.log(str, typeof str);
let strNaN = Number('123a4');                                        //NaN ==> Not a Number
console.log(strNaN, typeof strNaN);
let strbool=Number(true);
console.log(strbool, typeof strbool);
let strarr=Number([1,2,3,4,5,6])
console.log(strarr, typeof strarr)                                  //NaN
let strfloat=Number('342.0123')
console.log(strfloat, typeof strfloat)
*/

//parsefloat and parseint
let float = parseFloat("123.013");
console.log(float, typeof float);
console.log(float.toFixed(10)); // .toFixed ==> number after decimal point

let int = parseInt("12.03");
console.log(int, typeof int);

let string = "123";
let number1 = 45;
console.log(number1 + string);
