// # Functions & Arrow functions
// ## Exercise 1:
// 1. Greet the user with his name, the user's name is a parameter. Do this exercise,
// * first by using function declarations
// * then function expression,
// * then arrow function


// function greetingOne(user) {
//     alert(`Hello ${user}`)
// }

// const greetingTwo = function(user) {
//     alert (`Hello ${user}`)
// }

// const greetingThree = (user) => alert(`Hello ${user}`)

// let userName = prompt("What is your name?")

// greetingOne(userName);
// greetingTwo(userName);
// greetingThree(userName);

// ## Exercise 2: Function & Arrow function & Ternary Operator
// 1. Check if the user's age is higher than 18. Use ternary operator.
// - if the user's age is higher than 18, return "You can drive"
// - else, return "You cannot drive"
// Do this exercise,
// * first by using function declarations
// * then function expression,
// * then arrow function

function ageChecker(age) {
    if (age > 18) {
        return "You can drive";
    }
    else {
        return "You cannot drive";
    }
}

ageChecker(20);

const ageCheckerTwo = (age) => age > 18 ? "You can drive" : "You cannot drive";

ageCheckerTwo(16);