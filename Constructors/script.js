// Constructor Function

function Circle(radius) {
  console.log('this', this);
  this.radius = radius;
  this.draw = function () {
    console.log('draw');
  };
  return this;
}

const another = new Circle(1);
