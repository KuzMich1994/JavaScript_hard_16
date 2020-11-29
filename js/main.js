'use strict';
// Задание 1 (1 способ)
let arr = ['12345', '22345', '32345', '42345', '52345', '62345', '21345'];
console.log(arr);

const newArr = arr.map(function(item) {
  if (item.startsWith('2') || item.startsWith('4')) {
    console.log(item);
  }
  return item;
});

console.log('');
// Задание 1 (Второй способ)
let arr2 = ['12345', '22345', '32345', '42345', '52345', '62345', '21345'];
console.log(arr2);

arr2.forEach(function(item) {
  if (item.startsWith('2') || item.startsWith('4')) {
    console.log(item);
  }
});

// Задание 2

let a = 100;

primeNumber:
for (let i = 2; i <= a; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      continue primeNumber;
    }
  }
  console.log(i + ` Делители этого числа: 1 и ${i}`);
}

