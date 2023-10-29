// Asynchronous Function

console.log('I');
console.log('eat');

setTimeout(() => {
  console.log('Ice-cream');
}, 3000);

console.log('with a');
console.log('spoon');

function one(call_two) {
  console.log('Step 1 complete. Please Call Step 2');
  call_two();
}

function two(call_one) {
  console.log('step 2 ');
}

two();
one(two);
