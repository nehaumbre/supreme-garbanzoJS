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
                eggs : this.eggs,
                milkCartons: this.milkCartons
            });
        }
    }
}

let veg = ["Beans", "Brocolli", "peppers", "aubergine"];
let basket1 = shoppingBasket("Apple",veg, 3, 12);
console.log(basket1.checkout());
console.log(basket1);

