function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log('draw');
    },
  };
}

const circle = createCircle(1);

// // Constructor Function
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log('draw');
  };
}

const another = new Circle(1);

let x = {};

let y = new Object();

new String(); //, ' ', " ",` `
new Boolean(); // true, false
new Number(); // 1, 2, 3, ....
