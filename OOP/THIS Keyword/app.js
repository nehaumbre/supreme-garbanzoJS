// console.log(window);
// console.log(this);
// Using "this" as a global scope
console.log(this === window); //  true😁

let firstName = "Neha";
let lastName = 'umbre';

let fullname = function () {
    console.log(`Hi my name is ${firstName} ${lastName}`)
}

fullname();
// --------------------------

// --------------------------
// Using "this" in object

const house = {
    location: "Wellsbury street 7",
    lane: "Lane 3001",
    // this keyword will now refer to the owner obj which in this case is
    // the (house)
    // return this;
    taxi: function () {
        console.log(`Please take me to ${this.location}, ${this.lane}`);
    }
}
const whereTo = house.taxi();
console.log(whereTo);

// --------------------------
// Using "this" in Function

function callThis() {
    return this;
}
console.log(callThis());

// using "this" keyword in arrow method
// this doesntwork in arrow functions only normal functions

let obj = {
    fName: "Harry",
    lName: "Potter",
    fullNme: () => {
        return `Hi my name is ${this.fName} ${this.lName}`; // output : Hi my name is undefined undefined
    }
}

let name = obj.fullNme();
console.log(name);


// Create a person object and store your name & age
// -> Also create a method name (greetRegular) by using a regular function
//  --> Print this message `Hello, my name is ${this.name} & I'm ${this.age} years old.`
// -> Create one more method name (greetArrow) using arrow function
//  --> Print this message `Hello, my name is ${this.name} & I'm ${this.age} years old.`

// *************** SOLUTION

let person = {
    name: 'Simon',
    age: 40,
    greetregular: function () {
        return `Hello, my name is ${this.name} & I'm ${this.age} years old.`
    },
    greetArrow: () => {
        return `Hello, my name is ${this.name} & I'm ${this.age} years old.`
    }
}
let regular = person.greetregular();
let arrow = person.greetArrow();
console.log(regular);
console.log(arrow);