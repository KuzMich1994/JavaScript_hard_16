'use strict';
// Задача 1
// Решение через if else
let lang = prompt('Какой язык?');
let langRu = 'Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье';
let langEn = 'Monday, tuesday, wednesday, thursday, friday, saturday, sunday';

if (lang === 'ru') {
  alert(langRu);
} else if (lang === 'en') {
  alert(langEn);
} else {
  alert("Такого языка мы пока не знаем (We don't know such a language yet)");
}

// Решение через switch
let lang1 = prompt('Какой язык?');
let langRu1 = 'Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье';
let langEn1 = 'Monday, tuesday, wednesday, thursday, friday, saturday, sunday';

switch (lang1) {
  case 'ru':
    alert(langRu1);
    break;
  case 'en':
    alert(langEn1);
    break;
  default: alert("Такого языка мы пока не знаем (We don't know such a language yet)");
}

// Решение через многомерный массив
let lang2 = prompt('Какой язык?');
let array = {
  'ru': [['Понедельник'], ['вторник'], ['среда'], ['четверг'], ['пятница'], ['суббота'], ['воскресенье']],
  'en': [['Monday'], ['tuesday'], ['wednesday'], ['thursday'], ['friday'], ['saturday'], ['sunday']]
};
alert(array[lang2]);

// Задача 2
let namePerson = prompt('Кто?');
let result = (namePerson === 'Артём') ? console.log('Директор') :
(namePerson === 'Максим') ? console.log('Преподаватель') : console.log('Студент');