function Circle(radius) {
  this.radius = radius;

  let defaultLocation = { x: 0, y: 5 };

  this.getDefaultLocation = function () {
    return defaultLocation;
  };

  this.draw = function () {
    console.log('draw');
  };

  Object.defineProperty(this, 'defaultLocation', {
    get: function () {
      return defaultLocation;
    },
    set: function (value) {
      if (!value.x || value.y) defaultLocation = value;

      throw new Error('Invalid Location');

      defaultLocation = value;
    },
  });
}

const circle = new Circle(10);
circle.defaultLocation = 1;
circle.getDefaultLocation();
circle.draw();
