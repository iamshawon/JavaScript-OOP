// Topic 7: Inheritance and Composition Mixin
//================================================

function mixin(target, ...sources) {
  Object.assign(target, ...sources); // es6 rest & spread
}

var canWalk = {
  walk: function () {
    console.log("Walk");
  },
};

var canEat = {
  eat: function () {
    console.log("Eat");
  },
};

var canSwim = {
  swim: function () {
    console.log("Swim");
  },
};

//person
function Person(name) {
  this.name = name;
}

mixin(Person.prototype, canWalk, canEat);

var person = new Person("Shawon");
console.log(person);

//goldfish
function Goldfish(name) {
  this.name = name;
}

mixin(Goldfish.prototype, canEat, canSwim);

var goldfish = new Goldfish("Goldfish");
console.log(goldfish);
