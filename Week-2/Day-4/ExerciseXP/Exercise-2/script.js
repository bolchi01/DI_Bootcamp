
function calculateTip() {
    let digit = Number(prompt("What's the bill without a tip? "));
    let tip;
    if (digit < 50) {
        tip = 0.2 * digit;
    }
    else if (digit >= 50 && digit <= 200) {
        tip = 0.15 * digit;
    }
    else if (digit > 200) {
        tip = 0.1 * digit;
    }
    let finalBill = tip + digit
    console.log("Your tip amount is " + tip + " and your final amount is " + finalBill)
}
 
calculateTip();

