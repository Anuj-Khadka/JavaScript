class Railway{
    constructor(givenName, address, trainType) {
          this.name = givenName;
          this.address = address;
          this.trainType = trainType;
          this.analyse = () => {
            console.log("the appication is genuine.");
          };
        }
    submit(){
        console.log("the form is submitted")
    }
    cancel(){
        console.log("the form was cancelled")
    }
}

let newForm = new Railway("anuj", "np", "hyperloop")




class jayNepal extends Railway{
    /**
     * @param {boolean} meal
     */ 
    constructor(givenName, address, trainType, meal, dropPoint){
        super(givenName, address, trainType)
        this.meal = meal;
        this.dropPoint = dropPoint
    }
    submit(){
        super.submit()
        console.log(`Hey ${this.name}, we will get back to you ASAP`)
    }
}

let nepalForm = new jayNepal("brutpull", "ktm", "metro", true, "bir")



console.log("Raillway: ", Railway.prototype)
console.log("Jay Nepal old: ", jayNepal.prototype)


jayNepal.prototype = Object.create(Railway.prototype)

console.log("Railway: ",Railway.prototype)
console.log("Jay Nepal new: ",jayNepal.prototype)



// function.call() inheritance 
