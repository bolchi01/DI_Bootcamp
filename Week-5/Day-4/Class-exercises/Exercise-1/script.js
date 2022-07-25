// async function famousNames() {
//     let nameArray = [];
//     let firstName = prompt("Name a famous person");
//     nameArray.push(firstName);
//     let secondName = prompt("Name another famous person");
//     nameArray.push(secondName);
//     if (nameArray.every(i => (typeof i == 'string'))) {
//         return nameArray;
//     }
//     else{
//         throw new Error("not all the names are strings");
//     }
// }

// famousNames()
// .then(res => console.log(res))
// .catch(error => console.log(error))

// async function letterNoun(noun) {
//     if (noun.length < 3){
//         throw new Error("noun not long enough");
//     }
//     else{
//         return noun;
//     }
// }

// letterNoun("fi")
// .then(res => console.log(res))
// .catch(error => console.log(error))

// async function upperCity(city) {
//     firstLetter = city.charAt(0);
//     if(firstLetter.toUpperCase() === firstLetter){
//         return city;
//     }
//     else{
//         throw new Error("no capital letter")
//     }
// }

// upperCity("london")
// .then(res => console.log(res))
// .catch(error => console.log(error))

// async function checkVerb(verb) {

// }

// function retrieveName (){
// 	fetch('https://jsonplaceholder.typicode.com/users/1')
// 	.then(result => result.json())
// 	.then(objName => console.log(objName["name"]))
// }

// retrieveName()

// function fetchWord () {
// 	fetch('http://random-word-api.herokuapp.com/word?number=1')
// 	.then(response => response.json())
// 	.then(result => {
// 		let [word] = result;
// 		fetchGif(word)
// 	})
// 	.catch(error => console.log("IN THE CATCH", error)) //catch an error if there is
// }

// function fetchGif (wordrandom) {
// 	fetch(`https://api.giphy.com/v1/gifs/random?tag=${wordrandom}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`) // return a promise with as a result a Response object
// 	.then(response => {
// 		if (response.status !== 200){
// 			throw new Error ("404 ERROR")	
// 		} else {
// 			return response.json(); //returns a promise
// 		}
// 	})
// 	.then(result => {
// 		console.log(result)
// 		if (result["data"] == []){
// 			throw new Error ("GIF NOT FOUND");
// 		} else {
// 			let gif = result["data"]["images"]["original"]["url"];
// 			let imageGif =  document.createElement("img");
// 			imageGif.setAttribute("src", gif);
// 			document.body.appendChild(imageGif)
// 		}
		
// 	})
// 	.catch(error => {
// 		let imageGif = document.createElement("img");
// 		imageGif.setAttribute("src", "https://media.giphy.com/media/TqiwHbFBaZ4ti/giphy.gif");
// 		document.body.appendChild(imageGif)
// 		console.log("IN THE CATCH", error)
// 	})
// }

// fetchWord()

async function fetchWord() {
    try {
        let result = await fetch('http://random-word-api.herokuapp.com/word?number=1')
        let [objName] = await result.json()
        console.log(objName)
        // fetchGid(objName)
    }
    catch (error) {
        console.log(error)
    }
}

fetchWord();

