//!A factory function is a type of function that is used to
//!create and return objects.
// ** It's a design pattern that provides an alternative way 
// *to create objects compared to using constructors and the new keyword.

// ------------------------------------------
let user = {
    firstName: "Simon",
    LastName: "Miller",
    fullname: function () {
        return `Hi im ${this.firstName} ${this.LastName}`
    }
}

let name = user.fullname();
console.log(name);

//below is factoryfunction
function createPerson(firstName, LastName, pl) {
    return {
        firstName: firstName,
        LastName: LastName,
        pl: pl,
        fullname: function () {
            return `Hi im ${this.firstName} ${this.LastName} and i love ${this.pl}`
        }
    }
}

let person1 = createPerson("sean", "grace jane", "Ruby");
let person2 = createPerson("hunx", "alzari", "GO");
console.log(person1);
console.log(person1.fullname());
console.log(person2);
console.log(person2.fullname());

// create a factory function that generates different
//  types of vehicles. Each vehicle object should have
//  properties like type, brand, model, and year.

// Create a factory function for vehicles
function vehicles(type, wheels, fuel, insurance) {
    return {
        type,
        wheels,
        fuel,
        insurance,
        drive: function () {
            console.table({
                Type: this.type,
                Wheels: this.wheels,
                Fuel: this.fuel,
                Insurance: this.insurance
            });
        }
    };
}


let vehicle1 = vehicles("bike", 2, "Petrol", "1 Year");
let vehicle2 = vehicles("scooter", 2, "Petrol", "1.5 Years");
console.log(vehicle1);
console.log(vehicle1.drive());
console.log(vehicle2.drive());


function shoppingBasket(fruit, veggies, milkCartons, eggs) {
    return {
        fruit,
        veggies,
        milkCartons,
        eggs,
        checkout: function () {
            console.table({
                Fruit: this.fruit,
                veggies: this.veggies,
                eggs: this.eggs,
                milkCartons: this.milkCartons
            });
        }
    }
}

let veg = ["Beans", "Brocolli", "peppers", "aubergine"];
let basket1 = shoppingBasket("Apple", veg, 3, 12);
console.log(basket1.checkout());
console.log(basket1);


console.clear();

// &Constructor functions in JavaScript 
// &are regular functions used with the new keyword to create 
// &and initialize objects with shared properties and methods. 
// *They act as blueprints for creating multiple instances of 
// *objects with the same structure and behavior.

//! CONSTRUCTOR FUNCTION : first letter is capital

function CreateCakes(cakeType, flavor, quantity) {
    this.cakeType = cakeType,
        this.flavor = flavor,
        this.quantity = quantity,
        this.deliver = function () {
            console.log(`Hi! I'd like ${quantity} of ${flavor} ${cakeType}`);
        }
}

const customer1 = new CreateCakes('Sponge cake', 'Plum', '300 grams');
console.log(customer1.deliver());
const customer2 = new CreateCakes('Short cake', 'Strawberry', '500 grams');
console.log(customer2.deliver());

//?1.create empty object
// ?2.set this to point to that object
//?3.omit return statement using new keyword


function Order(starters, mainCourse, dessert) {
    this.starters = starters,
        this.mainCourse = mainCourse,
        this.dessert = dessert,
        this.menu = function () {
            console.table({
                starters: this.starters,
                mainCourse: this.mainCourse,
                dessert: this.dessert
            })
        }
}

let table1 = new Order('Crispy Chicken', 'Rice with Chicken Curry', 'fruit jelly icecream');
let table2 = new Order('Veg Barbeque Platter', 'Rice and Barbeque chicken', 'Matcha IceCream');
console.log(table1.menu());
console.log(table2.menu());

//* 1. Create a person constructor which has parameters of (name, age, gender)
//* 2. Access parameter values to the call object.
//* 3. Create a method name (info), which will just print the info.
//* 4. Create a few instances
//* 5. Access each property

function Person(name, age, gender) {
    this.name = name,
        this.age = age,
        this.gender = gender,
        this.info = function () {
            console.table({
                name: this.name,
                age: this.age,
                gender: this.gender
            })
        }
}

let person5 = new Person('John', 50, "Male");
console.log(person5);
console.log(person5.info());


// *************** EXERCISE 2
// In this exercise, you will create a constructor function called Car that represents a car with specific properties such as make, model, year, and color. Additionally, you will define two methods, start and stop, to simulate starting and stopping the car.

// -> Define the Car constructor function that takes four parameters: make, model, year, and color.
// -> Inside the constructor, use this to assign the parameters to the corresponding properties of the object being created.
// -> Define a method called start as a property of the object. The start method should return a string message like "Starting the Toyota Camry..." where "Toyota" is the make and "Camry" is the model of the car.
// -> Define another method called stop as a property of the object. The stop method should return a string message like "Stopping the Honda CR-V." where "Honda" is the make and "CR-V" is the model of the car.
// -> Create two car instances (car1 and car2) using the Car constructor with different properties.


function Car(make, model, year, color) {
    this.make = make,
        this.model = model,
        this.year = year,
        this.color = color,
        this.start = function () {
            console.log(`start the ${this.make} ${this.model}`);
        },
        this.stop = function () {
            console.log(`Stop the ${this.make} ${this.model}`);
        }
}

let car1 = new Car("Toyota", "Camry", 2020, "White");
let car2 = new Car("Honda", "CR-V", 2024, "Red");
console.log(car1.start());
console.log(car1.stop());

console.log(car2.start());
console.log(car2.stop());