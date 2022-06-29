function hotelCost() {
    let nights;
    do {
        nights = Number(prompt("How many nights would you like to stay in the hotel?"))
    }
    while (Number.isInteger(nights) != true);

    price = nights * 140;
    return price
}

// hotelCost();
// console.log(price);


function planeRideCost() {
    do {
        destination = prompt("Where do you want to go?");
    }
    while (destination === '');

    if (destination == 'London') {
        price = 183;
        return price
    }
    else if (destination == 'Paris') {
        price = 220;
        return price
    }
    else {
        price = 300;
        return price
    }

}

// planeRideCost();
// console.log(price);

function rentalCarCost() {
    do {
        days = Number(prompt("For how many days do you need the car?"))
    }
    while (Number.isInteger(days) != true);

    price = 40 * days
    if (price > 400) {
        finalPrice = price * 0.95;
    }
    else {
        finalPrice = price;
    }

    return finalPrice;
}

// rentalCarCost();
// console.log(finalPrice);

function totalVacationCost() {
    price = hotelCost() + planeRideCost() + rentalCarCost();
    return price
}

totalVacationCost();
console.log(price);

