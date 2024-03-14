import { readNumber, readString, display } from '../../../../lib/dom-io.js';

document.getElementById('skip-them').addEventListener('click', () => {
  debugger;

  // read user values

let size = readNumber('skip-size');
let text = readString('user-text');

  // create a new string with skipped characters

let result = '';
for(let i = 0; i < text.length; i= i+size){
result = result + text[i];
}

  // display the skipped string
display('skipped-output',result);

});
