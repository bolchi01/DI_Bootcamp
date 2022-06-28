// 1. Create an object called family with a few key value pairs.

let family = {
    size : 5,
    location: "London",
    surname: "Bolchover"
}

// 2. Using a for in loop, console.log the keys of the object.

for (let x in family) {
    console.log(x);
}

for (let x in family) {
    console.log(family[x]);
}

