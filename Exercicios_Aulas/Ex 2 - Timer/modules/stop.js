import * as selectors from './selectors.js';
import {time} from './start.js';

function stopTimer(){
    selectors.fiveMinutes.disabled = false;
    selectors.tenMinutes.disabled = false;
    selectors.fifteenMinutes.disabled = false;
    selectors.start.disabled = false;

    clearInterval(time);
    
    selectors.timer.textContent = '05:00'
    
    selectors.fiveMinutes.classList.add('check');

    selectors.tenMinutes.classList.remove('check');
    selectors.fifteenMinutes.classList.remove('check');
}

export default stopTimer;
