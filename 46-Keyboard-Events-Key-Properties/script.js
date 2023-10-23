const itemInput = document.getElementById('item-input');

const onKeyPress = (e) => {
  console.log('keypress');
};

const onKeyUp = (e) => {
  console.log('keyup');
};

const onKeyDown = (e) => {
  //   // key
  //   console.log(e.key);
  //   //   document.querySelector('h1').innerText = e.key;
  //   if (e.key === 'Enter') {
  //     alert('You Pressed Enter');
  //   }
  //keyCode
  // https://www.Toptal.com/developers/keycode/table-of-all-keycodes
  if (e.keyCode === 13) {
    alert('You pressed enter');
  }
  // code
  //   console.log(e.code);

  if (e.code === 'Digit1') {
    console.log('You Pressed 1');
  }

  if (e.repeat) {
    console.log('You are Holding down' + e.key);
  }
  console.log('Shift: ' + e.shiftKey);
  console.log('Control: ' + e.ctrlKey);
  console.log('Alt: ' + e.altKey);

  if (e.shiftKey && e.key === 'K') {
    console.log('You Hit Shift + K');
  }
};

// itemInput.addEventListener('keypress', onKeyPress);
// itemInput.addEventListener('keyup', onKeyUp);
itemInput.addEventListener('keydown', onKeyDown);
