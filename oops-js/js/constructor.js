// class Railway{
//     submit(){
//         console.log("the form is submitted")
//     }
//     cancel(){
//         console.log("the form was cancelled")
//     }
// }

// let newForm = new Railway()
// newForm.submit();





// include constructor
// function railwayFunction(name, address, trainType) {
//   this.name = name;
//   this.address = address;
//   this.trainType = trainType;
//   this.analyse = () => {
//     console.log("the appication is genuine.");
//   };
// }

// let newForm = new railwayFunction("anuj", "NP", "full metro");
// newForm.submit();



// class and constructor
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
console.log(newForm)
newForm.analyse();
newForm.submit();