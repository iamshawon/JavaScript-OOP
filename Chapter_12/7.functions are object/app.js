// Topic 7: Function are Object
//================================================
function test() {
  console.log("This is a Test Function");
}
test();
console.log(test.name, test.length, test.prototype);

//console run
test;
typeof test;
test.constructor; // ƒ Function() { [native code] }
