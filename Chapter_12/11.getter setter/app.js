// Topic 11: Getter Setter
//================================================*/

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

  //method call to access
  this.getPostion = function () {
    return position;
  };

  // get & set
  Object.defineProperty(this, "position", {
    get: function () {
      return position;
    },
    set: function (value) {
      position = value;
    },
  });
};

var rect7 = new Rectangle(10, 20);
rect7.draw();

console.log(rect7.getPostion());

console.log(rect7.position);

rect7.position = {
  x: 456,
  y: -112,
};
console.log(rect7.position);
