let x;

// Array Literal
const numbers = [12,45,33,29,39,106,90,];
const mixed = [12,'Hello', true, null];

// array Constructor
const fruits = new Array('Apple','Grape','Orange','Bananananananananananananananananananan');

x = numbers[0];

x = numbers[0] + numbers[3];

x = `My favourite Fruit is an ${fruits[2]}`;

x = numbers.length;

fruits[2] ='peer';

// fruits.length = 2; 

fruits[3] = 'strawberry';

fruits[fruits.length] = 'blueberry';
fruits[fruits.length] = 'peach';


x = fruits;

console.log(x);
// console.log(numbers,mixed,fruits);