// Topic 2: This
//================================================

function myFunc() {
  console.log(this);
}
myFunc();

function myFunc() {
  console.log(this);
}
new myFunc();

var rect = {
  height: 51,
  width: 101,

  draw: function () {
    console.log("This is a Rectangle");
    this.printProperties();
  },

  printProperties: function () {
    console.log("Height is = " + this.height);
    console.log("Width is = " + this.width);
  },
};

rect.draw();

/* This tar value ney execution phase a */
var another = {
  width: 47,
  height: 56,
  print: rect.printProperties,
};

another.print();
