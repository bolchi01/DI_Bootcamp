function changeEnough(itemPrice, amountOfChange) {

    quarter = amountOfChange[0] * 0.25;
    dime = amountOfChange[1] * 0.1;
    nickel = amountOfChange[2] * 0.5;
    penny = amountOfChange[3] * 0.01

    sum = quarter + dime + nickel + penny;
    if (sum >= itemPrice) {
        return true
    }
    else {
        return false
    }
}

changeEnough(14.11, [2,100,0,0])