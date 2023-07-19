// import greet from './greet.js'

// // call the function & print the result on the screen
// console.log(greet('Xola'))
// import chalk from 'chalk';

// //import the greet module that is in the current folder
// import greet from './greet.js'

// const styledMessage = chalk.bgGreen.black(greet('Xola'));
// console.log(styledMessage)

import chalk from 'chalk';
import figlet from 'figlet';
import greet from './greet.js';

const greeting = greet('Xola');

// Generate ASCII art from the greeting
figlet(greeting, function(err, asciiArt) {
  if (err) {
    console.log('Error generating ASCII art:', err);
    return;
  }

  const styledMessage = chalk.bgGreen.black(asciiArt);
  console.log(styledMessage);
});



 
