const d = new Date(10, 9, 2023, 20, 0, 0);
const hour = d.getHours();

if (hour < 12) {
  console.log('Good Morning');
} else if (hour < 18) {
  console.log('Good AfterNoon');
} else {
  console.log('Good Night');
}

// Nesting If

if (hour < 12) {
  console.log('Good Morning');
  if (hour === 6) {
    console.log('Wake Up!');
  }
} else if (hour < 18) {
  console.log('Good AfterNoon');
} else {
  console.log('Good Night');
}
if (hour >= 20) {
  console.log('zzzzzzzzzzzzzzz');
}
if (hour >= 7 && hour < 15) {
  console.log('It is Work Time!');
}
if (hour === 6 || hour === 20) {
  console.log('brush your teeth!');
}
