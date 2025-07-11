console.log("ENCAPSULATION");
//*In JavaScript, we can achieve encapsulation
//*by using closures to create private members.

function Counter() {
  let _count = 0; //private variable

  //!Public method : that can access and modify the private variables

  this.increment = function () {
    _count++;
  };

  this.decrement = function () {
    _count--;
  };

  this.getCount = function () {
    return _count;
  };
}

const counter = new Counter();
// console.log(counter.getCount());
// console.log(counter.increment());

// console.log(counter.getCount());
// console.log(counter.decrement());
// console.log(counter.getCount());
console.log(counter._count);//undefined
// we can access the operations of counter but not the _count variable