console.clear();

// private
// public
//protected
// we dont have above keywords in JS
//we either use this or closures

//see below constructor function
function MyClass(publicF, privateF, protectedF) {
  //Public Field
  this.publicF = publicF; //accessible globally

  //private Field (closure)
  const _privateF = privateF; // not accessible outside class

  // protected Field
  const _protectedF = protectedF;

  // Public method
  this.publicMethod = function () {
    return `Public Field: ${this.publicF}`;
  };

  //private method (closure)
  function _privateMethod() {
    return `Private Field: ${_privateF}`;
  }

  // protected method (closure)
  function _protectedMethod() {
    return `Protected Field : ${_protectedF}`;
  }

  //Method to access protected method
  this.accessProtectedMethod = function () {
    return _protectedMethod();
  };
  this.accessPrivateMethod = function () {
    return _privateMethod();
  };
}

const myObject = new MyClass("Public Data", "Private Data", "Protected Data");

console.log(myObject.publicF); //Public Data
console.log(myObject._privateF); //undefined
console.log(myObject._protectedF); //undefined
console.log(myObject.publicMethod()); //Public Field: Public Data
// console.log(myObject._privateMethod());// Error :myObject._privateMethod is not a function
// console.log(myObject._protectedMethod()); //Error: myObject._protectedMethod is not a function
console.log(myObject.accessProtectedMethod());
console.log(myObject.accessPrivateMethod());


console.clear();