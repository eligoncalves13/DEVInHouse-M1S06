import * as selectors from './modules/selectors.js';
import startTimer from './modules/start.js';
import stopTimer from './modules/stop.js'; 

let duration = 60 * 5;

selectors.fiveMinutes.addEventListener('click', () => {
    selectors.timer.textContent = '05:00';
    duration = 60 * 5;

    selectors.fiveMinutes.classList.add('check');

    selectors.tenMinutes.classList.remove('check');
    selectors.fifteenMinutes.classList.remove('check');
});

selectors.tenMinutes.addEventListener('click', () => {
    selectors.timer.textContent = '10:00';
    duration = 60 * 10;

    selectors.tenMinutes.classList.add('check');

    selectors.fiveMinutes.classList.remove('check');
    selectors.fifteenMinutes.classList.remove('check');
});

selectors.fifteenMinutes.addEventListener('click', () => {
    selectors.timer.textContent = '15:00'
    duration = 60 * 15;

    selectors.fifteenMinutes.classList.add('check');

    selectors.fiveMinutes.classList.remove('check');
    selectors.tenMinutes.classList.remove('check');
});


selectors.start.addEventListener('click', () => {
    const display = selectors.timer;
    startTimer(duration, display);
});

selectors.stop.addEventListener('click', () => {
    duration = 60 * 5;
    stopTimer();
});

