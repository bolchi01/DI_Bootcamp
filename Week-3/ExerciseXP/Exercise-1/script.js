let divs = document.getElementsByTagName('div');

console.log(divs[0].innerHTML);

// could not figure out a way to select the first ul, and then the second li

//do all the first exercises

let pete = document.getElementsByTagName('li')[1];
pete.innerHTML = "Richard";

//I'm sure there is a way to select all elements that are the first li in all the document's ul, but could not work out how to do it.
let my_name1 = document.getElementsByTagName('li')[0];

my_name1.innerHTML = "Josh"

let my_name2 = document.getElementsByTagName('li')[2];

my_name2.innerHTML = "Josh"

//// could not figure out a way to select the first ul, and then the second li

let sarah = document.getElementsByTagName('li')[3];

sarah.innerHTML = "";