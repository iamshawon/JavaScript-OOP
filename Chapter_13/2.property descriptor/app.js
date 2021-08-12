// Topic 2: Property descriptor
//================================================

var person = {
  name: "Shawon",
};
console.log(person);

for (var i in person) {
  console.log(i);
}

console.log(Object.keys(person));

var descriptor = Object.getOwnPropertyDescriptor(person, "name");
console.log(descriptor);

//set property descriptor
Object.defineProperty(person, "name", {
  configurable: false,
  enumerable: false,
  writable: false,
  value: "Abu Hosen Shawon",
});
