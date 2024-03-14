import { readNumber, readString, display } from '../../../../lib/dom-io.js';

document.getElementById('repeat-it').addEventListener('click', () => {
  debugger;

  // read user values

  let number = readNumber ('number-of-times');
  let text = readString ('user-text');

  // repeat the string

let result = '';
for (let i = 0; i < number; i++){
  result =  result + text;
}
  // display the repeated string

  display ('repeated-output', result);
});
