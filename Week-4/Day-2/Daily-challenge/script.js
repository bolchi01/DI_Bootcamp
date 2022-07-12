let client = "John";

let groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$", // we will see this change as it is in an object, a dynamic data type
    other : {
        payed : false, // we will see this change as it is in an object, a dynamic data type
        meansOfPayment : ["cash", "creditCard"]
    }
}

const listFruits = () => {
    groceries.fruits.forEach((element) => 
    console.log(element))
}

listFruits();

const cloneGroceries = () => {
    let user = client;
    client = "Betty";
    console.log("user", user, "client", client); // we will not see this change to Betty as this is a primitive data type
    let shopping = groceries;
    groceries.totalPrice = "35$";
    console.log("shoppingPrice", shopping.totalPrice, "groceriesPrice", groceries.totalPrice); // you will see this change as it is a dynamic data type
}

cloneGroceries(); // does this do much - the task did not tell me to do anything else

