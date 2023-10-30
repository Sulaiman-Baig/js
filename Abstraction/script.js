function Circle(radius) {
  this.radius = radius;

  this.defaultlocation = { x: 0, y: 0 };

  this.computerOptimumLocation = function (factor) {
    // ...
  };

  this.draw = function () {
    this.computerOptimumLocation(0.1);

    console.log('draw');
  };
}

const circle = new Circle(10);
// circle.defaultlocation = false;
// circle.computerOptimumLocation(0.1);
circle.draw();
