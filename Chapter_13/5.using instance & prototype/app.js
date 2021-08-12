// Topic 5: Using Instance and Protype
//================================================

function Square(width) {
  this.width = width; //instance member
  this.getWidth = function () {
    console.log("getWidth function.");
    this.draw();
  };
}

Square.prototype = {
  draw: function () {
    // this.getWidth();
    console.log("Draw function.");
  },

  toString: function () {
    console.log("Modify toString function!");
  },
};

var sqr1 = new Square(10);
var sqr2 = new Square(5);
