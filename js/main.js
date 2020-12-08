'use strict';
const randomButton = document.querySelector('.random-color'),
canvas = document.querySelector('.canvas'),
randomTextColor = document.querySelector('.random-text-color'),
getRandom = function() {
  let randomColor = '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();
  randomColor = canvas.style.backgroundColor = `${randomColor}`;
  randomColor = randomTextColor.textContent = randomColor;
};

randomButton.addEventListener('click', function() {
  getRandom();
});