// Topic 6: Constructor Property
//================================================
var creatRect = function (height, width) {
  return {
    height: height,
    width: width,

    draw: function () {
      console.log("Factory Pattern");
      this.printProperties();
      //   console.log(this);
    },

    printProperties: function () {
      console.log("Height is = " + this.height);
      console.log("Width is = " + this.width);
    },
  };
};

var rect1 = creatRect(10, 20);
rect1.draw();
// console run
rect1.constructor();

var Rectangle = function (height, width) {
  this.height = height;
  this.width = width;

  this.draw = function () {
    console.log("Constructor Pattern");
    this.printProperties();
    // console.log(this);
  };

  this.printProperties = function () {
    console.log("Height is = " + this.height);
    console.log("Width is = " + this.width);
  };
};

var rect3 = new Rectangle(11, 22);
rect3.draw();

// console run
rect3.constructor();
