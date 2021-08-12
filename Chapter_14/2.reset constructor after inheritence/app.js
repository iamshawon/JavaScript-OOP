// Topic 2: Reset Constructor after Inheritence
//================================================

function Shape() {}

Shape.prototype.common = function () {
  console.log("I am Commond Function");
};

function Square(width) {
  this.width = width;
}

Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square; //constructor reset

Square.prototype.draw = function () {
  console.log("Drawing");
};

/*
//Reset
Square.prototype = {
  test: function () {
    console.log("Reset Constructor");
  },
};
*/

var shape = new Shape();
var sqr = new Square(45);

// new object create
// new Square.prototype.constructor(47);
