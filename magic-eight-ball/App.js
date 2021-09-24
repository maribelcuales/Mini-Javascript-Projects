/**
Magic Eight Ball 

In this project we will build the Magic Eight Ball using control flow in JavaScript.

The user will be able to input a question, then our program will output a random fortune. 
**/

let userName = '';

// Create a ternary expression that decides what to do if the user enters a name or not
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

// Create variable for the question
let userQuestion = 'Will I find a pot of gold at the end of the rainbow?';

// Print question to the console  
console.log(`The user asked: ${userQuestion}?`);

// Generate a random number between 0 and 7
let randomNumber = Math.floor(Math.random() * 8);

// Create variable and set equal to an empty string
// We will save a value to this variable in the next steps, depending on the value of randomNumber.
let eightBall = '';

// Create a control flow 

switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightball = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes'
    break;
  default:
    console.log("Good lukc!");
    break;
}

// Console log the Magic Eight Ball's answer 
console.log(`The eight ball answered: ${eightBall}`); 