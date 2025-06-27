const person = {
    "name": "John Doe",
    "age": 30,
    "email": "john@example.com",
    "isprogrammer": true,
    "location": ["Texas", "Nashville"]
}
console.log(person);
console.log(typeof person); //object

const arr = [];
console.log(typeof arr); //object

//accessin items from object

console.log(person.name);
console.log(person.age);
console.log(person.email);
console.log(person.isprogrammer);
console.log(person.location);

// or

console.log(person["name"]);
console.log(person["age"]);
console.log(person["email"]);
console.log(person["isprogrammer"]);
console.log(person["location"]);

//adding new values to object

person.profession = "Web Developer";
delete person.isprogrammer;
console.log(person);

// 1. Create object name (car)
// 2. add (type, model, color) as properties
// 3. check the type of object
// 4. Update the type property to "Toyota"
// 5. Add new property wheels
// 6. log car to the console.

const car = {
    "model": "Camry",
    "type": "sedan",
    "color": "green"
}

console.log(typeof car);
car.type = "Toyota";
car.wheels = "";
console.log(car);






