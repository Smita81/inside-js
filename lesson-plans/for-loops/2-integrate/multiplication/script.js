import { readNumber, display } from '../../../../lib/dom-io.js';

document.getElementById("do-math").addEventListener('click', () => {
  debugger;
  
  // read user values

  let left = readNumber("left");
  let right = readNumber("right");

// use a for loop to multiply the two numbers

  let result = 0;
  for (let i = 0; i < right; i++) {
    result = result + left;
  }

 // display the product

display ("product", result)
});
