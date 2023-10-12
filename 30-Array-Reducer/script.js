const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

const sum2 = numbers.reduce((acc, cur) => acc + cur, 10);

console.log(sum2);

// Using a for Loop
const sum3 = () => {
  let acc = 0;
  for (const cur of numbers) {
    acc += cur;
  }
  return acc;
};

const cart = [
  { id: 1, name: 'Product 1', prices: 130 },
  { id: 2, name: 'Product 2', prices: 150 },
  { id: 3, name: 'Product 3', prices: 200 },
];

const total = cart.reduce(function (acc, product) {
  return acc + product.price;
}, 0);

console.log(total);

// console.log(sum3());
