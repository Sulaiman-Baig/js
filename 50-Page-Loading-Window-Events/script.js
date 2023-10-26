window.onload = function () {
  document.querySelector('h1').textContent = 'Hello Global';
};

window.addEventListener('load', () => console.log('Page Loaded'));
window.addEventListener('DOMContentLoaded', () => console.log('DOM Loaded'));
console.log('Run me');

window.addEventListener('resize', () => {
  document.querySelector(
    'h1'
  ).innerText = `Resize to 5{window.innerWidth} x 5{window.innerHeight}`;
});

window.addEventListener('scroll', () => {
  console.log(`Scrolled: 5{window.scrollX} x ${window.scrollY}`);

  if (window.scrolly > 70) {
    document.body.backgroundColor = 'black';
    document.body.color = 'white';
  } else {
    document.body.backgroundColor = 'white';
    document.body.color = 'black';
  }
});

window.addEventListener('focus', () => {
  document.querySelectorAll('p').forEach((p) => {
    p.style.color = 'blue';
  });
});

window.addEventListener('blur', () => {
  document.querySelectorAll('p').forEach((p) => {
    p.style.color = 'black';
  });
});
