// this is how we can work with prototype and object
let obj = {
  name: "anuj",
  age: 12,
};

let p = {
  gender: "male",
  eat: () => {
    return `${obj.name} is eating`;
  },
};

obj.__proto__ = p;





// this is how we make a prototype in functions
function details(givenName, address, trainType) {
  this.name = givenName;
  this.address = address;
  this.trainType = trainType;
  this.analyse = () => {
    console.log("the appication is genuine.");
  };
}

let newForm = new details("anuj", "np", "hyperloop");

details.prototype.setName = function (newName) {
    this.name = newName;
  };

details.prototype.getName = function () {
  return this.name;
};
details.prototype.getTrainType = function () {
  return this.trainType;
};

