function isDivisible() {
    let numbers = []
    let sum = 0;
    for (i = 0; i <= 500; i++) {
        if(i %23 == 0) {
            numbers.push(i);
            sum += i;
        }
    }
    console.log("Outcome: " + numbers);
    console.log("Sum: " + sum);
}

isDivisible();