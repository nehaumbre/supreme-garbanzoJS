// Class DEclaration
// first letter is Capital
class Person {
  constructor(firstName, LastName, age) {
    //Instance Members
    this.firstName = firstName;
    this.LastName = LastName;
    this.age = age;
    this.printUserInfo = function () {
      return `Name: ${this.firstName} ${this.LastName}, Age: ${this.age}`;
    };
  }
  greet() {
    return `hello ${this.firstName} ${this.LastName}!`;
  } //Prototype Members
}

//Inhertitance in classes
class Programmer extends Person {
  constructor(firstName, LastName, age, pl, experience) {
    super(firstName, LastName, age); //calls parent constructor
    this.pm = pl;
    this.experience = experience;
  }
}

const john = new Person("John", "Doe", 70);
console.table(john);
console.log(john.printUserInfo());

console.log(john.greet());

const camila = new Programmer("Camila", "Doe", 30, "go", 4);
console.log(camila);
console.log(camila.greet());

//Challenge

// class Hero {
//   constructor(name, level) {
//     this.name = name;
//     this.level = level;
//     this.greet = function (){
//         return `Hello Hero ${this.name}`
//     }
//   }
// }

// let thor = new Hero("thor", 9);

// class Mega extends Hero {
//     constructor(name, level, spell){
//         super(name,level);
//         this.spell = spell;
//     }
// }

// let mega = new Mega("MEGA", 0, "solomon");
// console.log(mega);
// console.log(mega.greet());

class Hero {
  constructor(name, level) {
    this.name = name;
    this.level = level;
    //   this.greet = function (){
    //       return `Hello Hero ${this.name}`
    //   }
  }
  greet() {
    return `Hello Hero ${this.name}!!!!!!!!!!!!!!!!!!!`
  }
}

let thor = new Hero("thor", 9);

class Mega extends Hero {
  constructor(name, level, spell) {
    super(name, level);
    this.spell = spell;
  }
}

let mega = new Mega("MEGA", 0, "solomon");
console.log(mega);
console.log(mega.greet());
