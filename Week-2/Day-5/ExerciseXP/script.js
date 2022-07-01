function playTheGame() {
    answer = confirm("Do you want to play the game?");
    if (answer == false) {
        alert("No problem, Goodbye!");
    }
    else if (answer == true) {
        userNumber = Number(prompt("Give me a number between 0-10:"));
        if (Number.isInteger(userNumber) != true) {
            alert("Sorry, not a number, Goodbye!");
        }
        else if (userNumber < 0 || userNumber > 10) {
            alert("Sorry, it's not a good number, Goodbye!");
        }
        else {
            computerNumber = Math.floor(Math.random() * 11);
        }
        //we can only return one value, so have to store the value in an array
        
        let data = [userNumber, computerNumber];
        console.log(data[0]);
        console.log(data[1]);
        return data;
    }
}


// used the one argument of data to have both the values. Could not figure out any other way.

function compareNumbers(data) {
    userNumber = data[0];
    console.log(userNumber);
    computerNumber = data[1];
    console.log(userNumber);

    if (userNumber == computerNumber) {

    }
}

compareNumbers(data);