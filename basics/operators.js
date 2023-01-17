// Arithematic Operator
var a = 15;
var b = 4;
console.log("the sum a+b =", a + b);
console.log("the difference a-b =", a - b);
console.log("the product a*b=", a * b);
console.log("the difference a/b=", a / b);
console.log("power", a ** b);
console.log("modulus", a % b);
console.log("increment", a++);
console.log("decrement", --b);



// ++a vs a++ 
// ++a increases the value of a by 1 and then executes
// a++ executes the value of a by 1 then increments it 

let inc_exe = ++a;          // 16
let exe_inc = a++;          // 16
console.log(inc_exe)
console.log(exe_inc)
console.log(a)              // 17



//Comparison Operators
var c = 15;
console.log(">", a > b);
console.log("<", a < b);
console.log(">=", a >= b);
console.log("<=", a <= b);
console.log("==", a == c);
console.log("===", a === c);
console.log("!==", a !== b);
console.log("!=", a != b);




//Logical Operators
console.log("and &&", a > b && b < c);
console.log("or || ", a < b || b > c);
console.log("not !", !(a < b));




//Assignment Operators
// console.log('=',a=b);
console.log("+=", (a += b));
console.log("-=", (a -= b));
console.log("*=", (a *= b));
console.log("/=", (a /= b));
console.log("**=", (a **= b));
console.log("%=", (a %= b));
console.log("<<=", (a <<= b)); // a=a<<b



//Conditional or Ternary Operator
const age = 18.0;
console.log(age >= 18 ? "Vote" : "NO vote");



//String Operator
const name = "Anuj",
  lname = "Khadka",
  x = true;
console.log(name + " " + lname);
console.log(name.toLowerCase());



//Type Operator
console.log(typeof a);
console.log(typeof age);
console.log(typeof name);
console.log(typeof x);
// console.log(instanceof(object))



//Bitwise Operators
console.log("and &", 8 & 4); // 1000 & 0100 = 0
console.log("or |", 8 | 4); //1000 | 0100 = 1100 = 12
console.log("not ~", ~8); //~1000 = -(8+1) = -9
console.log("xor ^", 8 ^ 4); //1000 ^ 0100 = 1100
console.log("<<", 8 << 4); //1000<<4 = 10000000 = 128
console.log(">>", 8 >> 4); //1000>>4 = 0000
// console.log('',);



var p = 8 << 5;
var q = 9 >>> 10;
var r = 8 << 10;
console.log(p, q, r);





/*
    16|8|4|2|1
    ---------
1     0 0 0 1
2     0 0 1 0
3     0 0 1 1               0011 >> 1 == 0001
4     0 1 0 0
5     0 1 0 1               0101 >>> 1 == 0010
6     0 1 1 0
7     0 1 1 1               0111 << 1 == 1110
8     1 0 0 0               1000 << 5 == 100000000              1000 >> 10 ==
9     1 0 0 1               1001 >>> 3 == 0001
10    1 0 1 0
11    1 0 1 1
12    1 1 0 0
13    1 1 0 1
14    1 1 1 0
15    1 1 1 1
16  1 0 0 0 0 
17  1 0 0 0 1
18  1 0 0 1 0 
19  1 0 0 1 1
20  1 0 1 0 0
*/
