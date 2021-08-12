// Topic 6: Iterate Obj and has own Property
//================================================

function Square(width) {
  this.width = width;
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

//get property
console.log(Object.keys(sqr1));

for (var i in sqr1) {
  console.log(i);
}
