function Circle(radius) {
  //   let color = 'red';
  //   this.color = color;
  this.radius = radius;

  let defaultLocation = { x: 0, y: 0 };

  let computeOptimumLocation = function (factor) {
    //...
  };

  this.draw = function () {
    let x, y;

    computeOptimumLocation(0.1);
    // defaultLocation
    // this.radius;

    console.log('draw');
  };
}

const circle = new Circle(10);
circle.draw();
