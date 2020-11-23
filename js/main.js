'use strict';
let num = 266219;

let strNum = String(num);
let result = 1;

for (let i = 0; i < strNum.length; i++) {
  result *= strNum[i];
}

result = result ** 3;

let resultStr = String(result);
console.log(resultStr.substring(0, 2));


let num2 = 266219;

console.log((num2.toString().split('').reduce( (acc, e) => acc * e) ** 3).toString().substring(0, 2));

// num2 = num2 ** 3;
// console.log(num2.toString());
