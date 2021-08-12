// Topic 6: Polymorphism
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

Square.prototype.common = function () {
  console.log("Calling from Square & Overridden");
};

var sqr = new Square(45, "Green");

// Circle
function Circle(radius, color) {
  Shape.call(this, color);
  this.radius = radius;
}

extend(Shape, Circle);

Circle.prototype.common = function () {
  // Shape.prototype.common.call(this);
  console.log("Calling from Circle & Overridden");
};

var circle = new Circle(11, "Red");

var s = new Shape("Purple");

/*
s.common()
sqr.common()
circle.common()
*/

// polymorphism method
var shapes = [s, sqr, circle];
for (var i of shapes) {
  i.common();
}

/* instance of
circle instanceof Circle;
true
circle instanceof Shape
true
circle instanceof Square
false
*/
