Function.prototype.myBind = function(context) {
  if (typeof this !== "function") {
    throw new TypeError("Function.prototype.myBind what is trying to be bound is not callable");
  }

  var arrArgs = Array.prototype.slice.call(arguments, 1),
    functionToBind = this;
    functionNOP = function () {};
    fBound = function () {
      return functionToBind.apply(this instanceof functionNOP && context ? this : context, arrArgs.concat(Array.prototype.slice.call(arguments)));
    };

    functionNOP.prototype = this.prototype;
    fBound.prototype = new functionNOP();

    return fBound;
};

Function.prototype.myBind = function myBind (context) {
  if (typeof this !== "function") {
    throw new Error("Function.prototype.myBind: must bind to a function")
  }

  var fn = this;
  var bindArgs = Array.prototype.slice.call(arguments, 1);
  return function () {
    var callArgs = Array.prototype.slice.call(arguments);
    return fn.apply(context, bindArgs.concat(callArgs));
  };
};


var foo = {
  x: 3
};

var bar = function(){
  console.log(this.x);
};

bar();

var boundFunc = bar.myBind(foo);

boundFunc();

function cuntQueef (name, sound) {
  this.name = name;
  this.sound = sound;
  // this.queef = function () {
  //   console.log(this.sound + "!!! went my cunnty flaps");
  // };
  cuntQueef.prototype.queef = function () {
  console.log(this.sound + "!!!! went the fanny cunt flaps.");
  };

}
var vag1 = new cuntQueef("fatlips", "fweep");
vag1.queef();
console.log(cuntQueef.prototype);
console.log();
