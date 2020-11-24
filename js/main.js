'use strict';
let firstVariable = prompt('Введите данные');
const secondVariable = 20;

function oneArg(arg) {
  if (typeof arg !== 'string') {
    return 'Это не строка';
  } else {
    if (arg.length > 30)  {
      arg = arg.trim().slice(0, 30) + '...';
      return arg;
    }
    return arg.trim();
  }
}

console.log(oneArg(firstVariable));
console.log(oneArg(secondVariable));
