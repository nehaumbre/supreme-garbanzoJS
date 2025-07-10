// *Every javascript object has a anonymous property called prototype
// *Remember functions & arrays are also a object
// *that prototype will be the parent of that object, prototype property is object by itself,
// * which have some special properties & methods


// !We can check the prototype of something in 3 ways:
//~ --> obj.__proto__
//~--> obj.constructor.prototype
//~--> Object.getPrototypeOf(a)

const obj={};
console.log(obj);
// 
// ~Every object is associated with another object.
// &The object (a) is associated with [[Prototype]] Object
//&-> which means a object will inherit all properties of Object.prototype || [[Prototype]]


const obj1 = {};
console.log(obj1.__proto__);
console.log(obj1.__proto__.__proto__);
console.log(obj1.constructor.prototype);
console.log(Object.getPrototypeOf(obj1));


//*EXample
const arr = new Array();
console.log(arr);


function People(firstName, LastName, pl){
    this.firstName = firstName,
    this.LastName = LastName,
    this.pl = pl
}

let per1 = new People("Hunx", "Doe", "GO");
console.log(per1.__proto__);
console.log(per1.__proto__.__proto__);
console.log(per1.__proto__.__proto__.__proto__);
//********************Changing the built in method*************************** */
Array.prototype.pop = function () {
    return "POP!POP!"
}
const myArr = [1,2,3];
console.log(myArr.pop());

String.prototype.hello = function () {
    console.log(this);
    console.log(this.toUpperCase());
};

console.log("Hello and Welcome".hello());

//  'this' points to [[Prototype]]:Object
const aray = ['one', 'two', 'three']
console.log(aray);

obj.__proto__                // direct link to the prototype
obj.constructor.prototype    // shared prototype of constructor function
Object.getPrototypeOf(obj)   // safe way to get prototype

// __proto__ is non - standard(still widely supported)

// Object.getPrototypeOf() is the safest, standard way.