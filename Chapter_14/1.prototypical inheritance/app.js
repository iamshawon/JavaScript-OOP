// Topic 1: Prototypical Inheritence
//================================================

function Shape() {}

Shape.prototype.common = function () {
  console.log("I am Commond Function");
};

function Square(width) {
  this.width = width;
}

Square.prototype = Object.create(Shape.prototype);

Square.prototype.draw = function () {
  console.log("Drawing");
};

var shape = new Shape();
var sqr = new Square(45);

// shape -> Shape -> Object
// sqr -> Squre -> Object

// sqr -> Squre -> Shape -> Object
