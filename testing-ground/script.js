const reference = document.querySelector('.reference');
const p = document.createElement('p');
const h3 = document.createElement('h3');
const div = document.createElement('div');
const h1 = document.createElement('h1');
const p2 = document.createElement('p');

p.textContent = 'Hey I\'m Red';
h3.textContent = 'Hey I\'m a blue h3';
h1.textContent = 'Hey I\'m in a div';
p2.textContent = 'ME TOO!';

reference.appendChild(p);
reference.appendChild(h3);
reference.appendChild(div);

div.style.border = '1px solid black';
div.style['background-color'] = 'pink';
div.appendChild(h1);
div.appendChild(p2);

const button = document.querySelector('.button');

button.addEventListener('click', function (e) {
    console.log(e.target);
    e.target.style.backgroundColor = 'blue';
})

const buttons = document.querySelectorAll('.buttons');

buttons.forEach(function (button) {
    button.addEventListener('click', () => {
        alert(button.id);
    })
})

