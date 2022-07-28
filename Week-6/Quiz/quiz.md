# Review on Javascript
​
#### Basics
​
1. How to access the second element of the array `let arr = [3, 7, 10]`
arr[1];
​
2. For the code below, what does `arrNums.splice(2, 0)` return?
​
    ```javascript
    let arrNums = [1, 2, 3, 4, 5];
    ```
returns an empty array as you are not removing any values from the arrNums array
​
3. What is the result of the following code :
​
    ```javascript
    const oneTwoThree = [1, 2, 3]
    const sevenEightNine = [7, 8, 9]
    
    const all = [4, 5, 6, ...oneTwoThree, ...sevenEightNine];
    console.log(all)
    ```
    [4, 5, 6, 1, 2, 3, 7, 8, 9]
​
4. What does the following code print to the console?
​
   ```javascript
   let golf = {
     type: "sport",
     clubs: {
       high_end: "taylor made",
       low_end: "rusty basement clubs"
     }
   }  
   golf.clubs.high_end = "callaway";
   console.log(golf.clubs.high_end);
   ```
   it will print "callaway", as callaway replaces 'taylor made'.
   
5. Can we define the function as follows? If yes, what is it called, and explain how to invoke it.
​
    ```javascript
    const x = function(a, b){
       return a*b;
    }
    ```
    Yes you can define a function as follows. It is called a function expression. You call it by coding x(a, b).
​
6. Variables created **without** any keyword, are always global, even if they are created inside a function ? Yes or No and explain
​
    ```javascript
    function x() {
    	a = 5;
    }
    ```
No, they are not global, as all you are doing is assigning a value to a variable, not declaring the variable. You would have to use var to declare a global variable in a function.
​
#### Functions
​
7. In JavaScript can we pass functions as arguments to other functions? What does this code return ?
​
    ```javascript
    function sayHello() {
       return "Hello, ";
    }
    function greeting(helloMessage, name) {
      console.log(helloMessage() + name);
    }
    greeting(sayHello, "JavaScript!");
    ```

    Yes you can pass functions as arguments. This code, when the greeting fnction is invoked, with return 'Hello, Javascript!'. 
8. Transform this function into an arrow function
​
      ```javascript
      function sum(num1, num2){
          return num1 + num2
      }
      
      sum(40,2)
      sum(42,0)
      console.log("the answer to everything is", sum(42,0))
      ```
      sum((num1, num2) => num1 + num2);
9. What does the following code print to the console? Explain the process and concept behind it
​
     ```javascript
     function foo () {
       function bar() {
         return "Poppin' bottles";
       }
       return bar();
     }
     console.log(foo());
     ```
    foo() will be called, which invoked bar(), which returns "poppin' bottles". This is returned to foo, which then returns bar(), the same value, back to the console.log, so "poppin' bottles" will be printed in the console.
​
#### DOM
​
10. Which of the following events will you add in the `addEventListener()`method? 
      ☐ click
      ☐ onclick
    Just click. 
​
11. Does the `addEventListener()` method allow you to add many events to the same element?
​
    ```javascript
    x.addEventListener("mouseover", func1);
    x.addEventListener("click", func2);
    x.addEventListener("mouseout", func3);`
    ```
    Yes it does.
​
12. DOM exercise
​
      1. Part I : Create a button in your HTML page, when the user will click the the button a paragraph will be added on the DOM with the content "New Paragraph". Use arrow functions
HTML--
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button>Click for new paragraph</button>
    <div id="container"></div>
    
    <script src="script.js"></script>
</body>
</html>
--

      const buttonSelect = () => {
        button = document.getElementsByTagName('button')[0];
        button.addEventListener('click', newPara)
    };

buttonSelect();

const newPara = () => {
    let textBox = document.createElement('p');
    textBox.textContent = 'New para added';
    div = document.getElementById('container');
    div.appendChild(textBox);
    textBox.addEventListener('mouseover', changeRed);
};
​
      2. Part II : Add to each new paragraph a event listener of mouse over. When you hoover on a paragraph, it should become red

   function changeRed(e) {
    let para = e.target;
    para.style.color = 'red';
}
 
​
#### Array Methods
​
14. What is the value of `passed` in the following code?
​
     ```javascript
     let marks = [67, 60, 89, 90, 67, 42];
     
     let passed = marks.every(function(m) {
        return m >= 50;
     });
     ```

     it will return false, as it is checking if very number in the marks array is over or equal to 50.
​
15. What does the following code log?
​
   ```javascript
   let nums = [10, 50, 88];
   
   let bignums = nums.filter(function(n) {
      return n > 10;
   });
   
   console.log(bignums);
   ```
   it will log [50, 88], as it filters out any numbers not greater than 10, which includes 10 in the nums array
​
16. Use a javascript array method to square the value of every element in the array. 
​
   ```javascript
   const input = [ 1, 2, 3, 4, 5 ];
   //code
   console.log(input) // [ 1, 4, 9, 16, 25]
   ```

   const input1 = [ 1, 2, 3, 4, 5 ];
    const input2 = input1.map(x => x * x);
    console.log(input2);

​
16. Use 2 javascript array methods and chain them to return the sum of all the positives ones. 
​
     ```javascript
     const secondInput = [ 1, -4, 12, 0, -3, 29, -150];
     //code
     const filter = secondInput.filter(function(n) {
    return n >= 0;
    })

    const total = filter.reduce((accumulator, value) => {
    return accumulator + value;
    }, 0);
  
     console.log(total) //42
     ```
​
17. Use 3 javascript methods and chain them to abbreviate the name and return the name initials.
​
     ```javascript
     const input = 'George Raymond Richard Martin';
     //code 
     let arr = input.split(' ');
    console.log(arr);

    const initials = arr.map((letter) => letter[0]).join('')
     console.log(initials)//'GRRM'
     ```
​
#### Object and Classes
​
18. How the objects are passed in JavaScript? By Value or By Reference ? Explain with an example

They are passed by reference, as they change the actual value by referring to their reference address. An example is if you change the value of two values in an object within a function, this will actually change their value outside the function. 
eg obj = {
    a: 1,
    b: 2
}

console.log(obj.a) // 1
console.log(obj.b) // 2

function changeValue() {
    let tmp = obj.a;
    obj.a = obj.b;
    obj.b = tmp;
}

changeValue();
console.log(obj.a) // 2
console.log(obj.b) // 1
​
19. What will be printed in the console
​
    ```javascript
    function Item(name, price) {
       this.name = name;
       this.price = price;
       this.displayInfo = function() {
       console.log(this.name + " is for $ " + this.price)
       }
    } 
​
    const cake = new Item("Chocolate Cake", 10);
    cake.displayInfo();
    ```
​   "Chocolate Cake is for $ 10" will be displayed in the console.

20. Refactor this code using Classes

class Cake {
    constructor(name, price) {
        this.nameCake = name;
        this.priceCake = price;
    }
    displayInfo() {
        console.log(this.nameCake + " is for $ " + this.priceCake)
    }
}

let chocCake = new Cake ("Chocolate Cake", 10);
​chocCake.displayInfo();
#### Promises
​
21. What will be the output and why ? What will be the state of the promise ?
​
    ```javascript
    Promise.resolve('Success!')
      .then(data => {
        return data.toUpperCase()
      })
      .then(data => {
        console.log(data)
      })
    ```
    The state of the promise will be resolved, and the output will be SUCCESS!. This is because .then takes the result of the promise, which is Success, and converts it to upper case. There is another then straight afterwards, which will then print SUCCESS! in the console.
​
22. What log will be made by the following code, after 2 seconds?
​
    ```javascript
    const p = new Promise(function(resolve, reject) {
       setTimeout(function() {
          resolve("OK");
       }, 2000);
    });
    
    p.then().then(function(data) {
       console.log(data);
    });
    ```

    It will log OK after two seconds.
​
23. Consider the following async function and its output. What will be displayed to the console when calling the `f()` function? Explain the process
​
    ```javascript
    async function f() {
      let result = 'first!';
      let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('done!'), 1000);
      });
    
      result = await promise;
    
      console.log(result);
    }
    
    f();
    ```
    Done! will be displayed in the console after one second, and not first. This is because the first result is a local variable, so will not be called after the end of the f() function. Rather, result will equal to a resolved promise after 10 seconds, which will return done! when completed. It is this that is printed in the console.
​
24. Use async await, and fetch a fact on cats and display it `https://catfact.ninja/fact`
    1. Create 2 functions : on to fetch data from API, the other one to display it on the page using the DOM
    2. Make sure to use try and catch

async function fetchWord() {
    try {
        let result = await fetch('https://catfact.ninja/fact')
        let objName = await result.json()
        console.log(objName.fact)
        displayFact(objName.fact)
    }
    catch (error) {
        console.log(error)
    }
}

async function displayFact(word) {
    let textBox = document.createElement('p');
    textBox.textContent = word;
    div = document.getElementById('container');
    div.appendChild(textBox);
};

fetchWord();
