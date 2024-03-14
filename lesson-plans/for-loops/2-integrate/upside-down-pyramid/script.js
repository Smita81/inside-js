import { readString, display } from '../../../../lib/dom-io.js';

document.getElementById('pyramid-it').addEventListener('click', () => {
  debugger;

  // read user text

let text = readString('to-pyramid');
let output = "";

  // create the pyramid

  for (let i = 0; i < text.length; i++) {
  let row = text.substr(i) + '\n';
  output = output + row;
  
  }

  // display the pyramid

display('pyramided',output);
});
