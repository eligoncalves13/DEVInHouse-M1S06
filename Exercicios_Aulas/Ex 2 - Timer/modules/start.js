import * as selectors from './selectors.js';
import stopTimer from './stop.js';

export let time;

function startTimer(duration, display){
    selectors.fiveMinutes.disabled = true;
    selectors.tenMinutes.disabled = true;
    selectors.fifteenMinutes.disabled = true;
    selectors.start.disabled = true;

    let timer = duration;
    let minutes;
    let seconds;

    time = setInterval(() => {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        display.textContent = minutes + ':' + seconds;

        if(--timer < 0){
            timer = duration;
        }

        if(timer === 0){
            stopTimer();
        }
    }, 1000)
}

export default startTimer;
