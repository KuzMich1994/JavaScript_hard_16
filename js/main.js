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
