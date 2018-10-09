'use strict'

alert('Welcome! Let\'s play a guessing game so you can learn more about me.');

// Get user's name and greet them

var username = prompt('What is your name?');
console.log('Username is: ' + username);
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
Q: Was I in the military?
A: Yes (I enlisted into the Army) */
var answerTwo = prompt('Was I in the military?').toUpperCase();
console.log(answerTwo);
if (answerTwo === 'YES' || answerTwo === 'Y') {
  alert('Correct!. I operated tactical voice and data networks in the Army for six years.');
  console.log('Question one was answered correcty');
} else {
  alert('Oops, sorry. I enlisted into the Army in 2000.');
  console.log('Question one was answered incorrectly');
}

/* Question Three
Q: Have I been to Iraq?
A: Yes (2004-2005 and 2005-2006) */
var answerThree = prompt('Have I been to Iraq?').toUpperCase();
console.log(answerThree);
if (answerThree === 'YES' || answerThree === 'Y') {
  alert('Nice work! I spent two years over there.');
  console.log('Question one was answered correcty');
} else {
  alert('Unfortunately, I was there for two years (04-05 and again from 05-06).');
  console.log('Question one was answered incorrectly');
}

/* Question Four
Q:
A: */

/* Question Five
Q:
A: */
