//Part I
let people = ["Greg", "Mary", "Devon", "James"];

//1. to remove the first item;
people.shift();

//2. Write code to replace “James” to “Jason”.
people.splice(2, 1, "Jason");

// 3. Write code to add your name to the end of the people array.
people.push("Josh");

// 4. Write code that console.logs Mary’s index. take a look at the indexOf method on Google.

console.log(people.indexOf("Mary"));


// 5. Write code to make a copy of the people array using the slice method.
// The copy should NOT include “Mary” or your name.
// Hint: remember that now the people array should look like this let people = ["Mary", "Devon", "Jason", "Yourname"];
// Hint: Check out the documentation for the slice method

let clonePeople = people.slice();

clonePeople.shift();

clonePeople.pop();

// Write code that gives the index of “Foo”. Why does it return -1 ?

clonePeople.indexOf("Foo") // will return -1 as 'Foo' cannot be found in the array.

// 7. Create a variable called last which value is the last element of the array.
// Hint: What is the relationship between the index of the last element in the array and the length of the array?

let final = clonePeople.length - 1;

last = clonePeople[final];


//Part II

// 1. Using a loop, iterate through the people array and console.log each person.

for (let i in people) {
    console.log(people[i]);
}

// 2. Using a loop, iterate through the people array and exit the loop after you console.log “Jason” .
// Hint: take a look at the break statement in the lesson.

for (let j in people) {
    if (people[j] == "Jason") {
        break;
    }
    console.log(people[j]);
}