let text = "Hello";

function checkText (){
	console.log("In the function",text); 
	text += " World";
	console.log("Still in the function",text);
}

console.log("before the function", text); // "before the function Hell"

checkText() //still in the function Hello World

console.log("after the function", text); //"before the function Hello World"

let friend = "Harry";

function checkfriend (){
	let friend = "Alice";
	console.log("In the function",friend); 
	friend += " Smith";
	console.log("Still in the function",friend);
}

console.log("before the function", friend); // "before the function Harry"

checkfriend() // "In the function Alice", "Still in the function Alice Smith"

console.log("after the function", friend); // after the function Harry