// let detail = name => console.log(name)
// let detail = (name, age) => console.log(name, age)
// detail("anuj", 12)

let obj = {
    name: "Anuj",
    job: "SWE",
    age: 12,
    // work: function(){
    //     console.log(this)
    //     let that = this;
    //     setTimeout(function (){
    //         console.log(this)
    //         console.log(`${that.name} is working`);

    //     }, 2000);
    // }
    

    // lexical this solved with arrow function 
    work: function (){
        console.log(this)
        setTimeout( ()=>{
            // use arrow function here because you are having problem with "this" at this place
            console.log(this)
            console.log(`${this.name} is working`);
        }, 2000);
    }

}

// console.log(obj.work())
obj.work()