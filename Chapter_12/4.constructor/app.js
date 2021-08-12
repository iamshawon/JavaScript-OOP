// Topic 4: Constructor function
//================================================

var Rectangle = function (height, width) {
  this.height = height;
  this.width = width;

  this.draw = function () {
    console.log("This is a Rectangle Factory");
    this.printProperties();
    console.log(this);
  };

  this.printProperties = function () {
    console.log("Height is = " + this.height);
    console.log("Width is = " + this.width);
  };
};

var rect3 = new Rectangle(10, 20);
rect3.draw();
