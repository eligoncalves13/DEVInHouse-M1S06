import {studentAverage} from './modules/media.js';

const n1 = parseFloat(window.prompt('Digite a nota 1: '));
const n2 = parseFloat(window.prompt('Digite a nota 2: '));
const n3 = parseFloat(window.prompt('Digite a nota 3: '));

studentAverage(n1, n2, n3);
