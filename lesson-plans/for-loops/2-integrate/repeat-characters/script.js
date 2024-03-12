import { readNumber, readString, display } from '../../../../lib/dom-io.js';

document.getElementById("repeat-them").addEventListener('click', () => {
  debugger;

  // read user values

  let text = readString('user-text')
 
  // read user number 2/3
 
  let number = readNumber ("number-of-times");

  // repeat the characters in the text

 let newText = '';
  for (let i = 0; i < text.length; i++) {
    for (let d = 0; d < repetationNumbers; d++) {
      newText += text[i]; 
      
      }
  }

  // display the text with repeated characters
 
  output("repeated-output", newText);

});
