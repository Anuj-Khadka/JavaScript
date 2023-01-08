// Primitive Datatypes

let str = "Anuj";
let num = 13;
let bool = true;
let nul = null;
let undef = undefined;
let symbol = Symbol('I am a symbol.');
let bigInteger = BigInt(123);


console.log(str, "=", typeof str);
console.log(num, "=", typeof num);
console.log(bool, "=", typeof bool);
console.log(nul, "=", typeof nul);
console.log(undef, "=", typeof undef);
console.log(symbol,'=',typeof(symbol))
console.log(bigInteger,'=',typeof(bigInteger))


console.log("\n\n\n\n\n\n");


//Reference DataType

let array = [str, num, bool, nul, undef];
let object = {
  x: 1,
  y: 2,
  "a z": 3,
};

function funcName() {
    console.log("I am a function")
}

let date = new Date();

console.log(array, typeof array);
console.log(object, typeof object);
console.log(funcName(), typeof func_Name);
console.log(date, typeof Date);
