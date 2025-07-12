// // -------------- ES5 Code
// // Superclass constructor
// console.clear()
// function Animl(name) {
//   this.name = name;
// }

// // Method shared among all Animl instances
// Animl.prototype.makeSound = function () {
//   return "Unknown sound";
// };

// // Subclass constructor inheriting from Animl
// function Dogg(name) {
//   Animl.call(this, name); // Call the superclass constructor
// }

// // Set up prototype chain for Dogg to inherit from Animl
// Dogg.prototype = Object.create(Animl.prototype);

// // Method specific to Dogg
// Dogg.prototype.makeSound = function () {
//   return "Woof!";
// };

// // Creating instances of the classes
// const genericAniml = new Animl("Generic Animal");
// console.log(genericAniml.name); // Output: Generic Animl
// console.log(genericAniml.makeSound()); // Output: Unknown sound
// const dogg = new Dogg("Buddy");
// console.log(dogg);
// console.log(dogg.makeSound())

//ES6 way
class Animaal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    return "Unknown Sound";
  }
}

//Subclass inheriting from Animaal

class Crow extends Animaal {
  constructor(name) {
    super(name);
  }

  makeSound(){
    return "KAww!"
  }
}

const crow = new Animaal("Krow");
console.log(crow.makeSound())

const sparrow = new Crow("sparrow")
console.log(sparrow.makeSound())

