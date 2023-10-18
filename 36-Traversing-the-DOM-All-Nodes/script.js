let output;
const parent = document.querySelector('.parent');
output = parent.childNodes;
output = parent.childNodes[0].textContent;
output = parent.childNodes[0].nodeName;
output = parent.childNodes[3].textContent;
output = parent.childNodes[3].outerHTML;

output = parent.childNodes[3].innerText = 'Child One';
output = parent.childNodes[3].style.color = 'blue';

output = parent.firstChild;
output = parent.lastChild;

parent.lastChild.textContent = 'HelloWorld';

const child = document.querySelector('.child');
output = child.parentNode;
output = child.parentElement;

child.parentNode.style.backgroundColor = 'Brown';
child.parentNode.style.padding = '40px';

// Siblings
const secondItem = document.querySelector('.child:nth-child(2)');
output = output = secondItem.previousSibling;

console.log(output);
