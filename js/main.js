'use strict';
let today = new Date(),
now = today.getDay(),
nowMinutes = today.getMinutes(),
nowSeconds = today.getSeconds(),
nowHours = today.getHours(),
options = {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  hour: 'numeric',
  minute: 'numeric'
},
weekday = new Intl.DateTimeFormat('ru-Ru', options).format(today);

let outDay = document.querySelector('.text');
outDay.style.color = 'red';
let str = `Сегодня ${weekday} ,`;

outDay.innerHTML = str;

// let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
// today = new Date(),
// weekDay = today.getDay(),
// options = {weekday: 'long'},
// weekday = new Intl.DateTimeFormat('ru-RU', options).format(today);
//     console.log(weekday);


// let outWeek = document.querySelector('.text');
// let str = ' ';

// for (let i = 0; i < week.length; i++) {
//   if (i === (weekDay - 1) || i === (weekDay + 6)) {
//     str += week[i].bold() + '<br>';
//   } else if (week[i] === 'Суббота' || week[i] === 'Воскресенье') {
//     str += week[i].italics() + '<br>';
//   } else {
//     str += week[i] + '<br>';
//   }
// }

// outWeek.innerHTML = str;










