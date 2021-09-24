/**  
Dog Years

Here’s how you convert your age from “human years” to “dog years”:

- The first two years of a dog’s life count as 10.5 dog years each.
- Each year following equates to 4 dog years.
**/

// Enter age in human years 
const myAge = 40;

// Age in early years 
let earlyYears = 2;

// Multiply early years by 10.5 
earlyYears *= 10.5;

// Subtract 2 from myAge since we already accounted for the first two years 
let laterYears = myAge - 2;

// Multiply by 4 to calculate the number of dog years accounted for by your late years 
laterYears *= 4;

// Add earlyYears and laterYears
const myAgeInDogYears = earlyYears + laterYears;

// Create a variable for a name 
const myName = "Belle".toLowerCase(); 

// Print below to the console
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);

// My name is belle. I am 40 years old in human years which is 173 years old in dog years.
