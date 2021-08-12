// Topic 8: Apply, call, bind
//================================================
function myFunc(c, d) {
  console.log(this);
  console.log(this.a + this.b + c + d);
}

myFunc();

// Call, Apply
myFunc.call({});

myFunc.apply({});

// Call vs Apply
myFunc.call({ a: 10, b: 20 }, 30, 40);

myFunc.apply({ a: 11, b: 22 }, [33, 44]); // use array

//Bind
myFunc.bind({ a: 1, b: 3 }, 5, 7); //just bind kore print korena
var myBind = myFunc.bind({ a: 1, b: 3 });
myBind(5, 7);
