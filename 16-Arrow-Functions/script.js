// function add(a, b) {
//   return a + b;
// }

// Arrow Function Syntax
const add = (a, b) => {
  return a + b;
};
console.log(add(1, 2));

// Implicit Return
const subtract = (a, b) => a - b;
console.log(subtract(10, 5)); // Arrow Function in a callback

// Can Leave off () with a single param
const double = (a) => a * 2;
console.log(double(10)); // Arrow Function in a callback

// Returnning an Object
const createObj = () => ({
  name: 'Brad',
});
console.log(createObj()); // Arrow Function in a callback

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (n) {
  console.log(n);
});

numbers.forEach((n) => console.log(n));
