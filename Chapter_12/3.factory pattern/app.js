// Topic 3: Factory Pattern
//================================================

var creatRect = function (height, width) {
  return {
    height: height,
    width: width,

    draw: function () {
      console.log("This is a Rectangle Factory");
      this.printProperties();
      console.log(this);
    },

    printProperties: function () {
      console.log("Height is = " + this.height);
      console.log("Width is = " + this.width);
    },
  };
};

var rect1 = creatRect(10, 20);
rect1.draw();

var rect2 = creatRect(20, 30);
rect2.draw();
