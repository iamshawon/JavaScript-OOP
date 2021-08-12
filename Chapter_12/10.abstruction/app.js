// Topic 10: Abstruction Private
//================================================

var Rectangle = function (height, width) {
  this.height = height;
  this.width = width;
  var position = {
    x: 56,
    y: -100,
  };

  var printProperties = function () {
    console.log("Height is = " + height);
    console.log("Width is = " + width);
  };

  this.draw = function () {
    console.log("This is a Rectangle Abstruct");
    printProperties();
    console.log("Position: " + position.x + " , " + +position.y);
  };
};

var rect7 = new Rectangle(10, 20);
rect7.draw();
