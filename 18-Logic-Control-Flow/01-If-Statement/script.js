// If Statement

if (true) {
  console.log('This is True');
}

if (false) {
  console.log('This is NOT True');
}

const x = 10;
const y = 5;

if (x >= y) {
  console.log(`${x} is greater than or equal to ${y}`);
}

if (x === y) {
  console.log(`${x} is equal to ${y}`);
} else {
  console.log(`${x} is NOT equal to ${y}`);
}

if (x !== y) {
  var z = 20;
  console.log(`${z} is 20`);
}
console.log(z);

// Shorthand If
if (x >= y)
  console.log(`${x} is greater than or equal to ${y}`),
    console.log('This is True');
else console.log('This is False');
