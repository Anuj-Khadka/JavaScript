// // Array

// newArr = ["anuj", "algae", "brupull"]

// for(i = 0; i < newArr.length; i++){
//     console.log(newArr[i])
// }

// // Array Methods 

// // console.log(newArr.join(" and "))
// // console.log(newArr.pop())
// // console.log(newArr.push("yogi"))
// // console.log(newArr)
// // console.log(newArr.shift())
// // console.log(newArr.unshift("brutpull"))
// // delete newArr[1]                // delete is not a method, it is an operator
// // console.log(newArr)



// newArr.sort()       //this sorts the array in like 1, 11, 2, 22, 4444, 5 ....

// function compare(a,b){
//     return a - b;
// }
// newArr.sort(compare)    //this is used to arrange the arra ascendingly


// newArr.splice(2, 1, "anuj", "krishna", "khadka")        //stat, number of to be modified, modifing1, modigying2,....
// console.log(newArr)


// newArr2 = newArr.slice(2)       //slice doesn't modify existing array and creates a new array
// console.log(newArr2)



//################################################################################3

// Array loops ->

let arr = [1, 3, 5, 6, 10, 23]


// primitive method
// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i])
// }

// forEach loops
// arr.forEach( function(element){
//     console.log(element)
//     element *= element
//     console.log(element)
// })

// for..of loop
for(i of arr){
    console.log(i)
}

// for..in loop
for(i in arr){
    console.log(i)
}