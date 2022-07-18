// Create XMLHttpRequest object
let xhr = new XMLHttpRequest();

//2. Set the request
xhr.open('GET', 'https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My');

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
        console.log(xhr.response);
        displayUser(xhr.response)
    }
}

xhr.onprogress = function(event) {
	console.log("progress", xhr)
};

//7. when the request couldn’t be made
xhr.onerror = function(event) {
	console.log("error", xhr);
  	displayError(xhr)
};

const displayUser = (users) => {
	let results = document.getElementById("results")
    for (let i = 0; i < 20; i++) {
        let li = document.createElement("li");
		li.textContent = users[i];
        results.appendChild(li);
    }
}
