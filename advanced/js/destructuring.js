//working with builtin objects
// Math
// let {PI} = Math;
// console.log(PI)
// console.log(PI===Math.PI)
// PI = 12;
// console.log(PI===Math.PI)




// working with array
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let a = arr[0]               // ancient method
// let [a, b] = arr;
// let [a, , b] = arr;
// let [a, , b, c, , , d] = arr;
// console.log(a, b);

// rest operator
let [a, ...rest] = arr        
console.log(a, ...rest);

// spread operator
// arr2 = ["a", "b", "c", "d"]
// newArr = [...arr2, ...rest]
// console.log(newArr)





// working with objects 
let obj = {
  a: 1,
  b: 2,
  c: 3,
};

// let { a, b } = obj;
// console.log(a,b);
// let {a: w, b:x} = obj;
// console.log(w,x)


let nestedObj = {
    name: "Anuj",
    age: 12,
    address: {
        permanent: "DKT",
        temporary: "KTM",
    }
}

// console.log({...nestedObj, name: "ohman"})

// let {name, age, address} = nestedObj;
// console.log(name, age, address)

// let {name, address: {permanent, temporary}} = nestedObj;
// console.log(permanent, temporary)




// working with functions
// function person(object){
//     return `${object.name}, ${object.age}, ${object.address.temporary}, ${object.address.permanent}`
// }
// let oldWay = person(nestedObj)
// console.log(oldWay)

function person({name, age, address: {temporary, permanent}, tourist="PKR"}){
    return `${name}, ${age}, ${temporary}, ${permanent}, ${tourist}`
}
let newWay = person(nestedObj)
console.log(newWay)




