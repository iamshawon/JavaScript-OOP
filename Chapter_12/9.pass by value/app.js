// Topic 9: Pass/Call by Value & Pass/Call by Ref
//===================================================

// Primitive [Clone hoy n]
var n = 10;

function change(n) {
  n = n + 100;
  console.log(n);
}
change(n);
console.log(n);

// Object [Referce toiri hoy sob jayga te change hobe]
var obj = {
  a: 10,
  b: 20,
};
function changeMe(obj) {
  obj.a = obj.a + 100;
  obj.b = obj.b + 100;
  console.log(obj);
}
changeMe(obj);
console.log(obj);
