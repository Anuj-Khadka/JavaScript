class Animal {
  constructor(name) {
    // this.name = Animal.capitalize(name);
    this._name = name;
  }

  eat() {
    return `${this._name} is eating`;
    // return `${Animal.capitalize(this.name)} is eating`
  }

  static capitalize(name) {
    return name.charAt(0).toUpperCase() + name.substring(1, name.length);
  }

  static sum(a, b) {
    return a + b;
  }

  get nama() {
    // can be called directly like a property
    return this._name;
  }

  /**
   * @param {string} givenNewName
   */
  set newName(givenNewName) {
    this._name = givenNewName;
    return this._name;
  }
}

let dog = new Animal(Animal.capitalize("Jenny"));
console.log(dog);
console.log(Animal.sum(1, 2));                      // static methods are called directly by class









// getter setter in object
let person = {
  firstName: "Anuj",
  lastName: "Khadka",

  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },

  set fullName(name) {
    let parts = name.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

person.fullName = "Apple Ball";
console.log(person);
