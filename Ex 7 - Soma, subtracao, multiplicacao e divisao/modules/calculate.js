import {
    n1,
    n2, 
    result
} from './selectors.js'

function calculate(value){
    if(value === '+' || value === '-' || value === '/' || value === '*'){
        result.innerHTML = eval(n1.value+value+n2.value);
    } 
}

export default calculate;