(function () {
if (typeof Asteroids === "undefined") {
  window.Asteroids = {};
}

var Asteroid = Asteroids.Asteroid = function (obj) {
  obj.pos = obj.pos ||
  obj.color = obj.color  || '#8E6540';
  obj.color = obj.radius || Asteroids.Util.randomRadius();
  obj.vel = obj.vel || Asteroids.Util.randomVec(20);
  Asteroids.MovingObject.call(this, obj);
};

Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);

})();
