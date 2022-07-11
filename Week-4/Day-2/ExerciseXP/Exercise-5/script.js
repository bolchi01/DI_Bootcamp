// function makeJuice(size) {


//     function addIngredients(firstFruit, secondFruit, thirdFruit) {
//         let div = document.getElementById('container');
//         let text = document.createTextNode("The client wants a " + size + " juice containing " + firstFruit + ", " + secondFruit + " and " + thirdFruit)
//         div.appendChild(text);
//     }

//     addIngredients("melon", "pineapple", "mango")
// }

// makeJuice("medium")

function makeJuice(size) {

    let ingredients = [];

    function addIngredients(firstFruit, secondFruit, thirdFruit) {
        ingredients.push(firstFruit, secondFruit, thirdFruit);
    }
    addIngredients("Melon", "Mango", "Passionfruit");
    addIngredients("Apple", "Strawberry", "Papaya");

    
    text = document.createTextNode("The client wants a " + size + " juice containing ")
    function displayJuice() {
        ingredients.forEach((element) => {
        text.push(element)
        })
    
    let div = document.getElementById('container');    
    div.appendChild(text);
    }
    displayJuice();


}

makeJuice("small");
