// create an arr and take an array then add it to the array :)

// let arr = [2, 4, 7, 80, 12]
// console.log(arr)
// let num = parseInt(prompt("Enter a number"));
// arr.push(num)
// console.log(arr)





// keep adding array to the previous array, until 0 is not added

// let num = parseInt(prompt("Enter a number"));
// while (true){
//     let num = parseInt(prompt("Enter a number"));
//     if(num !== 0){
//         arr.push(num)
//         console.log(arr)
//     }
//     else{
//         break;
//     }
// }

// let a;
// do{
//     a = parseInt(prompt("Enter a number"));
//     arr.push(a);
// } while( a != 0)
// console.log(arr)



// filter number divisible by 10 from an array 

// let filterArr = arr.filter( div => div%10 == 0)
// console.group(filterArr)


// array of square of given array 

// let mapArr = arr.map( sq => sq**2 )
// console.log(mapArr)



// use reduce to calculate the factorial of a given number from an array of n natural numbers.

let arr = new Array;
// let num = parseInt(prompt("enter a number"));
let num = 5;

for(let i=1; i <= num; i++){
    arr.push(i)    
}

console.log(arr)

let x = new Array  
let reduceArr = arr.reduce((flag)=>{
    
    for(let i = 0; i < arr.length; i++){
        let flag = 1;  
        for(let j = arr[i]; j >= 1; j--){
            flag = flag*j
            
        }
        x.push(flag)  
    }   
    
})


console.log(x)