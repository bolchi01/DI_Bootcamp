// Create XMLHttpRequest object
let xhr = new XMLHttpRequest();

//2. Set the request
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');

//3. Set the response
xhr.responseType = 'json'; 

//4. Send the request
xhr.send();

console.log("-----after the send-----");

xhr.onload = function () {
    if (xhr.status != 200) {
        console.log("error status");
        displayError(xhr);
    } else {
        console.log("finished loading");
        displayUser(xhr.response)
    }
}

const displayUser = (users) => {
	let results = document.getElementById("results")
	let newusers  = users.filter(user => user.id <= 3)
	newusers.forEach(info => {
		let li = document.createElement("li");
		li.textContent = `${info.name} - ${info.email}`
		results.appendChild(li)
	});
}
