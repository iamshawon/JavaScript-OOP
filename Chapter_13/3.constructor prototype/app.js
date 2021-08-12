// Topic 3: Constructor Prototype
//================================================

function Person(name) {
  this.name = name;
}
var p1 = new Person("Shawon");
console.log(Object.getPrototypeOf(p1));
console.log(Person.prototype);

Person.prototype.PI = 3.14;
var p2 = new Person("Abu Hosen Shawon");

console.log(p1);
console.log(p2);
