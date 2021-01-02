'use strict';

const showDate = () => {
  const text = document.querySelector('.text');
  const span = document.createElement('span');
  const span2 = document.createElement('span');
  text.append(span);
  text.append(span2);
  span2.style.cssText = 'display: block; margin-top: 20px;';

  const getTime = () => {
    const dateNow = new Date();
    const dateNow2 = new Date().getTime();
    const timeRemaining = dateNow2 / 1000;
    const seconds = Math.floor(timeRemaining % 60);
    const minutes = Math.floor((timeRemaining / 60) % 60);
    const hours = dateNow.getHours();
    const day = dateNow.getDay();
    const year = dateNow.getFullYear();
    const options = {
      hour: 'numeric',
      second: 'numeric',
      minute: 'numeric'
    };
    const time = Intl.DateTimeFormat('ru-RU', options).format(dateNow);
    const localeDateFull =
    Intl.DateTimeFormat('ru-Ru', { weekday: 'long', day: 'numeric', month: 'long' }).format(dateNow);
    const localeDate = Intl.DateTimeFormat('ru-Ru').format(dateNow);
    let hoursText;
    let minutesText;
    let secondsText;

    if (hours === 1 || hours === 21) {
      hoursText = 'час';
    }
    if (hours > 1 && hours < 5 || hours > 21 && hours <= 24) {
      hoursText = 'часа';
    }
    if (hours > 5 && hours < 21) {
      hoursText = 'часов';
    }
    if (minutes.toString().match(/[2-4]$/)) {
      minutesText = 'минуты';
    }
    if (minutes.toString().match(/[5-9]$/) || minutes.toString().match(/0$/)) {
      minutesText = 'минут';
    }
    if (minutes.toString().match(/1$/)) {
      minutesText = 'минута';
    }
    if (seconds.toString().match(/[2-4]$/)) {
      secondsText = 'секунды';
    }
    if (seconds.toString().match(/[5-9]$/) || seconds.toString().match(/0$/) || seconds.toString().match(/^1[2-9]$/)) {
      secondsText = 'секунд';
    }
    if (seconds.toString().match(/1$/)) {
      secondsText = 'секунда';
    }

    return {
      timeRemaining,
      hours,
      minutes,
      seconds,
      time,
      localeDateFull,
      localeDate,
      day,
      year,
      hoursText,
      minutesText,
      secondsText
    };
  };

  let updateClockInterval;

  const updateClock = () => {
    const timer = getTime();

    updateClockInterval = requestAnimationFrame(updateClock);
    span.textContent = `Сегодня ${timer.localeDateFull}, ${timer.year} года, ${timer.hours} ${timer.hoursText} 
    ${timer.minutes} ${timer.minutesText} ${timer.seconds} ${timer.secondsText}`;
    span2.textContent = `${timer.localeDate} - ${timer.time}`;
    if (timer.year > 3000) {
      cancelAnimationFrame(updateClockInterval);
    }

  };
  updateClock();
};

showDate();
