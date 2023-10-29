function createCircle() {
  return {
    radius: 1,
    draw: function () {
      console.log('draw');
    },
  };
}

const circle = createCircle(1);
circle.draw();
