const items = ['Book', 'Table', 'Chair', 'Kite'];
const users = [{ name: 'Brad' }, { name: 'Kate' }, { name: 'Steve' }];

// for (let i = 0; i < items.length; i++) {
//   console.log(items[i]);
// }

// for (const item of items) {
//   console.log(item);
// }

for (const user of users) {
  console.log(user.name);
}

// Loop Over Strings
const str = 'Hello World';

for (const letter of str) {
  console.log(letter);
}

// Loop over Maps
const map = new Map();
map.set('name', 'John');
map.set('age', 30);
