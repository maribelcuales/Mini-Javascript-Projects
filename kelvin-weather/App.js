/**
Deep in his mountain-side meteorology lab, the mad scientist Kelvin has mastered weather prediction.

Recently, Kelvin began publishing his weather forecasts on his website. However there’s a problem: All of his forecasts describe the temperature in Kelvin.

With our knowledge of JavaScript, let’s convert Kelvin to Celsius, then to Fahrenheit. 
**/

// Today's weather forcast 293 degrees kelvin
const kelvin = 310;

// Convert Kelvin temperature to Celsius
const celsius = kelvin - 273;

// Convert Celsius to Fahrenheit  
let fahrenheit = (celsius * (9/5) + 32);

// Round the fahrenheit number using Math.floor() 
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheir.`);  
// The temperature is 98 degrees Fahrenheir.