let c;
let a = 34;
let b = 21;

console.log(a+b) //first expression
// Prediction: 55, as 34+21 = 55.
// Actual: 55

a = 2;

console.log(a+b) //second expression
// Prediction: 23, as a has been redefined as 2, so the calculation should be 21 + 2 = 23
// Actual: 23

// What is the value of c?  there is no value

// Analyse the code below, what will be the outcome?
console.log(3 + 4 + '5');
//unknown as '5' is a string, not a digit, so the calculation will not be simply 3 + 4 + 5 = 12. 
// In fact, it comes out as 75.
