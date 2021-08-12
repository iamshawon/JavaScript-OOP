// Topic 1: Object Literal
//================================================

var rect = {
  height: 50,
  width: 100,

  draw: function () {
    /* Object er moddhe function create korle seta method */
    console.log("This is a Rectangle");
    console.log("Height is = " + this.height);
    console.log("Width is = " + this.width);
  },
};

rect.draw();

rect.height = 100;
rect.draw();
