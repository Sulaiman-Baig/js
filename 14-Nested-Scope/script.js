function first() {
  const x = 100;

  function second() {
    const y = 200;
    console.log(x + y);
  }

  //   console.log(y);

  second();
}

first();

if (true) {
  const x = 200;

  if (x === 200) {
    const y = 200;
    console.log(x + y);
  }
  console.log(y);
}
