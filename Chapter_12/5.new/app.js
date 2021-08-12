// Topic 5: New Keyword
//================================================

/*
    - Empty object create
    - Bind this.
    - Phototype connect
    - Return this.
*/

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

function myNew(constructor) {
  var obj = {};
  Object.setPrototypeOf(obj, constructor.prototype);
  var argsArray = Array.prototype.slice.apply(arguments);
  constructor.apply(obj, argsArray.slice(1));

  return obj;
}

var rect4 = myNew(Rectangle, 22, 44);
rect4.draw();
