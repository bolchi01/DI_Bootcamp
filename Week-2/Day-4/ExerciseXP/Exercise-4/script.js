let stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

let prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

shoppingList = ["banana", "orange", "apple"];



function myBill() {
    let bill = 0;
    for (x in shoppingList) {
        if (stock[shoppingList[x]]   == 0) {
            console.log(shoppingList[x] + "is not in stock");
        }
        else {
            bill += stock[shoppingList[x]] * prices[shoppingList[x]]
        }
    }
    console.log(bill)
}

myBill();