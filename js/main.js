'use strict';
let firstVariable = prompt('Введите данные');
let secondVariable = 20;

function oneArg(arg) {
  if (typeof arg === 'string' && arg.length > 30) {
    return arg.trim().slice(0, 30) + '...';
  } else if (typeof arg === 'string') {
    return arg.trim();
  } else {
    return 'Это не строка';
  }
}

console.log(oneArg(firstVariable));
console.log(oneArg(secondVariable));

let a = 'ну как тебя сука сделать';
console.log(a.slice(0, 11) + '...');