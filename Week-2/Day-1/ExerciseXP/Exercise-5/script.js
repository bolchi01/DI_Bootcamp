// What is the output of each of the expressions below?


console.log(typeof(15))
// Prediction: int as 15 is an integer
// Actual: number

console.log(typeof(5.5))
// Prediction: number - same explanation as before, but now i now it comes back as datatype number, not an int
// Actual: number

console.log(typeof(NaN))
// Prediction: ? Don't know what NaN means
// Actual: number (??) - apparently NaN means Not a Number, but it is itself a number! 

console.log(typeof("hello"))
// Prediction: string - it is a word
// Actual: string

console.log(typeof(true))
// Prediction: boolean - true or false are boolean expressions
// Actual: boolean

console.log(typeof(1 != 2))
// Prediction: boolean - it is a false statement, and therefore a boolean
// Actual: boolean

console.log("hamburger" + "s")
// Prediction: hamburgers - combining two strings
// Actual: hamburgers

console.log("hamburgers" - "s")
// Prediction: hamburger - amending two strings
// Actual: NaN

console.log("1" + "3")
// Prediction: 13 - combining two strings
// Actual: 13

console.log("1" - "3")
// Prediction: ? - you should not be able to minus two strings
// Actual: -2

console.log("johnny" + 5)
// Prediction: Johhny5 combining two strings
// Actual: johnny5

console.log("johnny" - 5)
// Prediction: NaN - you cannot minus two strings
// Actual: NaN

console.log(99 * "hello")
// Prediction: NaN - you cannot multiple a number with a string
// Actual: NaN

console.log(1 != 1)
// Prediction: false - not true 1 is 1
// Actual: false

console.log(1 == "1")
// Prediction: true - 1 is 1, therefore true
// Actual: true

1 === "1"
// Prediction: false, as though they have the same value, they do not share the same datatype (one is a number, the other a string), therefore it will return false.
// Actual: false.