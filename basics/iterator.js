// it is used to travel the array or object when we want next and next value each time 

let fruits = [ "Apple", "Banana", "Grapes", "Orages", "Mango"]

function fruitsIterator(values){
    let nextIndex = 0;
    // we will return an object 
    return {
        next: function (){
            if(nextIndex < values.length ){
                return {
                    value: values[nextIndex++],
                    done: false,
                }
            }else{
                return {
                    done:true
                }
            }
        }
    }
}


console.log(fruits)


let newFunc = fruitsIterator(fruits)            // this will create a new function each time.
console.log(newFunc.next())
console.log(newFunc.next().value)
console.log(newFunc.next())
console.log(newFunc.next())
console.log(newFunc.next())