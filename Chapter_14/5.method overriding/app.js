// Topic 5: Method Overriding
//================================================

function extend(Parent, Child) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Shape(color) {
  this.color = color;
}

Shape.prototype.common = function () {
  console.log("I am Commond Function");
};

// Squre
function Square(width, color) {
  Shape.call(this, color);
  this.width = width;
}

extend(Shape, Square);

Square.prototype.draw = function () {
  console.log("Drawing");
};

var sqr = new Square(45, "Green");

// Circle
function Circle(radius, color) {
  Shape.call(this, color);
  this.radius = radius;
}

extend(Shape, Circle);

var circle = new Circle(11, "Red");

// Override function
Circle.prototype.common = function () {
  // Shape.prototype.common.call(this);
  console.log("Calling from Circle & Overridden");
};
