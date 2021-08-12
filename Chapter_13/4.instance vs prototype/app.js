// Topic 4: Instance Vs Prototype
//================================================

function Square(width) {
  this.width = width; //instance member
}

Square.prototype = {
  draw: function () {
    console.log("Draw function");
  },

  toString: function () {
    console.log("Modify toString function!");
  },
};

var sqr1 = new Square(10);
var sqr2 = new Square(5);
