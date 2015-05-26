function myObject(name) {
  this.name = name;
  console.log("i am " + name);
  console.log(arguments[0]);
  console.log(Array.prototype.slice.call(arguments, 1));
  myObject.prototype.fuckThis = function () {
    var string = "fuck this";
  };
  this.fuckThis.prototype.innerFucker = function () {
    var string = "FUCKED fuck this";
  };
  console.log(this.__proto__);
  console.log(this.__proto__.__proto__);
}
var myObj = new myObject("david","fuckface",1,2,3);

var myFunction = function(name, age) {
    this.name = name;
    this.age = age;
    console.log("i'm " + name + " and i'm " + age + " years old.");
}

var objFun = myFunction;
myFunction("carl", 18);
objFun("dave",44);
myFunction("greg", 31);

function times(num, funxn) {
  for (var i = 0; i < num; i++) {
    funxn();
  }
}

var cat = {
  age: 5,

  ageOneYear: function () {
    this.age += 1;
  }
};

console.log(cat.age + " years old before"); //prints cat.age
cat.ageOneYear();
console.log(cat.age + " years old after");//prints cat.age after ageOnYear is called

times(10, cat.ageOneYear);
console.log(cat.age + " times 10 after function style, WRONG");//function "ageOneYear" is called function style from window
// ie: as if we just typed "ageOneYear();" from the node command line. thus "this" is set to window
//and not to cat, so the method call would evaluate to "undefined" and the cat's age would not change.

times(10, function() {
  cat.ageOneYear();
});
console.log(cat.age + " times 10 after closure over cat, WORKS");

times(10, cat.ageOneYear.bind(cat));
console.log(cat.age + " times 10 after binding cat to method WORKS");


function SumCalculator () {
  //scope 0
  this.sum = 0;
}

// SumCalculator.prototype.addNumbers = function (numbers) {
//   //scope 1
//   numbers.forEach(function, (number) {
//     //scope 2
//     this.sum += number; //nooo!
//   });
//
//   return sum;
// };

SumCalculator.prototype.addNumbers = function (numbers) {
  //scope 1
  var sumCalculator = this; //"captures" this inside a variable to be used inside the anonymous function called below

  numbers.forEach(function (number) {
    //scope 2
    sumCalculator.sum += number; //works as intended
  });

  return sum;
};

obj = {
  name: "earl watts"
};

function greet (msg) {
  console.log(msg + ": " + this.name);
}

greet.apply(obj, ["hello"]); //apply passes an object to bind, and its arguments in an array
greet.call(obj, "hello"); //call passes an object to bind, and its arguments sequentially

function Animal () {};
function Dog () {};
function Poodle () {};

Animal.prototype.hasFur = function () {
  this.furry = true;
  this.tellem = function () {
    console.log( this.constructor + ": i has fur");
  };
};

Dog.prototype = new Animal();
Poodle.prototype = new Dog ();


var myAnimal = new Animal();
var myDog = new Dog();
var myPoodle = new Poodle();
myAnimal.hasFur();
myDog.hasFur();
myPoodle.hasFur();

console.log(Dog.prototype.__proto__.constructor + " dogs proto");
console.log(Poodle.prototype.__proto__.constructor + " poodles proto");
console.log(Animal.prototype + " animals proto");

console.log(myAnimal.furry);
console.log(myDog.furry);
console.log(myPoodle.furry);
myPoodle.tellem();
