'use strict'

alert('Welcome! Let\'s play a guessing game so you can learn more about me.');

// Get user's name and greet them

var username = prompt('What is your name?');
console.log(username);
alert('Welcome, ' + username + '! Let\'s get started!');

/* Question One
Q: Did I grow up in Washington?
A: No (I grew up in Wisconsin) */

var answerOne = prompt('Did I grow up in Washington?').toUpperCase();
console.log(answerOne);
if (answerOne === 'YES' || answerOne === 'Y') {
  alert('Oops, sorry. I was born and raised in Wisconsin!');
  console.log('Question one was answered incorrecty');
} else {
  alert('Correct! I was born and raised in Wisconsin!');
  console.log('Question one was answered correctly');
}

/* Question Two
Q:
A: */
