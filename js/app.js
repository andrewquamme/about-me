'use strict'
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function questionOne() {
  /* Question One
  ++++++++++++++++++++
  Q: Was I born in a barn?
  A: No (I was born in a hospital) */

  var answerOne = prompt('Was I born in a barn?').toUpperCase();
  console.log(answerOne);
  if (answerOne === 'YES' || answerOne === 'Y') {
    console.log('Question one was answered incorrecty');
  } else {
    alert('Correct!');
    console.log('Question one was answered correctly');
    score++;
    alert('Nope! While I did grow up on a farm, I was in fact born in a hospital.');
  }
}

function questionTwo() {
  /* Question Two
  ++++++++++++++++++++
  Q: Was I in the military?
  A: Yes (I enlisted into the Army) */

  var answerTwo = prompt('Was I in the military?').toUpperCase();
  console.log(answerTwo);
  if (answerTwo === 'YES' || answerTwo === 'Y') {
    alert('Correct! I operated tactical voice and data networks in the Army for six years.');
    console.log('Question one was answered correcty');
    score++;
  } else {
    alert('Incorrect, ' + username + '. I enlisted into the Army in 2000.');
    console.log('Question two was answered incorrectly');
  }
}

function questionThree() {
  /* Question Three
  ++++++++++++++++++++
  Q: Have I been to Iraq?
  A: Yes (2004-2005 and 2005-2006) */

  var answerThree = prompt('Have I been to Iraq?').toUpperCase();
  console.log(answerThree);
  if (answerThree === 'YES' || answerThree === 'Y') {
    alert('Nice work! I spent two years over there.');
    console.log('Question one was answered correcty');
    score++;
  } else {
    alert('Unfortunately, ' + username + ', I was there for two years (04-05 and again from 05-06).');
    console.log('Question three was answered incorrectly');
  }
}

function questionFour() {
  /* Question Four
  ++++++++++++++++++++
  Q: Is my favorite food chopped liver?
  A: NO.*/

  var answerFour = prompt('Is my favorite food chopper liver?').toUpperCase();
  console.log(answerFour);
  if (answerFour === 'YES' || answerFour === 'Y') {
    alert('Come on, ' + username + '... Who likes chopped liver?');
    console.log('Question one was answered incorrecty');
  } else {
    alert('100% correct, ' + username + '. I do not like it at all!');
    console.log('Question four was answered correctly');
    score++;
  }
}

function questionFive() {
  /* Question Five
  ++++++++++++++++++++
  Q: Have I cycled from Seattle to Portland?
  A: Yes, twice for some reason */

  var answerFive = prompt('Have I cycled from Seattle to Portland?').toUpperCase();
  console.log(answerFive);
  if (answerFive === 'YES' || answerFive === 'Y') {
    alert('Nice job, ' + username + '! Over 200 miles!');
    console.log('Question five was answered correcty');
    score++;
  } else {
    alert('Oh ye of little faith ' + username + '! I have! (I even did it again the next year for some reason...)');
    console.log('Question one was answered incorrectly');
  }
}

function questionSix() { 
  /* Question Six
  ++++++++++++++++++++
  Random number guessing game
  Script chooses a number between 1 and 10 and user gets 4 attempts to guess */

  var numToGuess = Math.floor(Math.random() * 10) + 1;
  console.log('Number to guess: ' + numToGuess);
  var numTries = 0;
  alert('Now for a different kind of game...');

  do {
    var guessedNum = Number(prompt('Guess a number between 1 and 10! You are on attempt ' + (numTries + 1) + '/4.'));
    console.log('User guessed: ' + guessedNum);
    numTries ++;
    if (guessedNum < numToGuess) {
      alert('Too low!');
      console.log('Too Low');
    } else if (guessedNum > numToGuess) {
      alert('Too high!');
      console.log('Too High');
    } else {
      alert(numToGuess + '! You got it ' + username + '!');
      console.log('Question six was answered correctly');
      score++;
      break;
    }
    if (numTries === 4) {
      alert('Sorry! You\'ve tried too many times :( The number was: ' + numToGuess);
      console.log('User ran out of tries');
    }
  } while (guessedNum !== numToGuess && numTries < 4);
}

function questionSeven() {
  /* Question 7
  ++++++++++++++++++++
  Guess which other states I've lived in
  User enters states as a guess and that entry is compared to values in an array */

  alert('I have lived in a few different states besides Washington. See if you can guess another state I\'ve lived in!')
  var arrayOfStates = ['Wisconsin', 'South Carolina', 'Georgia'];
  var stateInArray = false;
  var triesRemaining = 6;

  do {
    var guessedState = prompt('Enter a state. You have ' + triesRemaining + ' tries remaining.');
    console.log('User entered ' + guessedState);
    for (var i = 0; i < arrayOfStates.length; i++) {
      if (arrayOfStates[i].toUpperCase() === guessedState.toUpperCase()) {
        stateInArray = true;
        alert('Nice work, ' + username + '! I have lived in ' + arrayOfStates + '.');
        console.log('Question seven was answered correctly');
        score++;
        break;
      }
    }
    if (!stateInArray) {
      alert('Nope, haven\'t lived there!');
      triesRemaining--;
      if (triesRemaining === 0) {
        alert('Sorry ' + username + ', you ran out of tries. I have lived in ' + arrayOfStates + '.');
      }
    }
  } while (!stateInArray && triesRemaining > 0);
}
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Greet the unknown user and ask for their name

alert('Welcome! Let\'s play a little guessing game so you can learn more about me.');
var username = prompt('My name is Andrew, what\'s yours?');
console.log('Username is: ' + username);

/* This entire game is enclosed in a loop to allow for
a user to cancel the prompt games  */

if (username !== null) {

  /*User did not hit cancel, so let the games begin!
  Initialize score keeping and greet user by name*/

  var score = 0;
  alert('Hi ' + username + '! Let\'s get started! First, a few Y/N questions.');

  questionOne();
  questionTwo();
  questionThree();
  questionFour();
  questionFive();
  questionSix();
  questionSeven();

  /* Final Score
  ++++++++++++++++++++
  Let the user know their final score */

  console.log('Total score is: ' + score);
  if (score === 7) {
    alert('Awesome job, ' + username + '!!! You got 7/7!!!')
  } else {
    alert('Better luck next time, ' + username + '. You got ' + score + '/7 correct.');
  }
}
