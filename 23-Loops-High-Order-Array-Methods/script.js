// For Loop

for (var i = 0; i <= 11; i++) {
  if (i === 7) {
    console.log('10 is my Lucky Number !');
  } else {
    console.log('Number ' + i);
  }
}

for (let j = 0; j <= 11; j = j + 3) {
  console.log('Number ' + j);
}

// console.log(i);

// Nest Loops
for (let i = 1; i <= 10; i++) {
  console.log('Number ' + i);

  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

// Loop Through an Array
const names = ['Brad', 'Sam', 'Sara', 'John', 'Tim'];

for (let i = 0; i < names.length; i++) {
  if (names[i] === 'John') {
    console.log(names[i] + ' is the best');
  } else {
    console.log(names[i]);
  }
}
