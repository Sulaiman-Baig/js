// InsertAdjacentElement Example
function InsertElement() {
  const filter = document.querySelector('.filter');
  const h1 = document.createElement('h1');
  h1.textContent = 'insertAdjacentElement';
  filter.insertAdjacentElement('beforebegin', h1);
}
// InsertAdjacentText Example
function InsertText() {
  const item = document.querySelector('li:first-child');
  item.insertAdjacentText('afterend', 'insertAdjacentText');
}
// InsertAdjacentHTML Example
function insertHTML() {
  const clearBtn = document.querySelector('#clear');
  clearBtn.insertAdjacentHTML('afterend', '<h2>insertAdjacentHTML</h2>');
}

// InsertBefore Example
function InsertBeforeItem() {
  const ul = document.querySelector('ul');

  const li = document.createElement('li');
  li.textContent = 'insertBefore';

  const thirdItem = document.querySelector('li:nth-child(3)');

  ul.insertBefore(li, thirdItem);
}

InsertElement();
InsertText();
insertHTML();
InsertBeforeItem();

/*
<!-- beforebegin-->
<p>
<!-- afterbegin-->
foo
<!-- beforeend-->
</p>
<!-- afterend-->
*/
