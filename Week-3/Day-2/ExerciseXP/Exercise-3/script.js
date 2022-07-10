let allBoldItems = [];

function getBold_items() {
    allBoldItems = document.querySelectorAll('strong');
}

getBold_items();


// don't know how to style the specific function
function highlight() { 
    for (let i = 0; i < allBoldItems.length; i++) {
        console.log(allBoldItems[i]);
        allBoldItems[i].style.color = "blue";
    }
}

highlight();