// // set an interval for every second
// // create a new paragraph every second

// let idInterval;

// function startAdding() {
//     idInterval = setInterval(newBanner, 100);
// }

// startAdding();

// let counter = 10;

// function newBanner() {
//     console.log("hello");
//     if (counter == 0) {
//         clearInterval(idInterval)
//     }
//     else {
//     let div = document.getElementById('banner');
//     let p = document.createElement('p');
//     let text = document.createTextNode(`Sale ends in ${counter} seconds!`);
//     p.append(text);
//     div.append(p);
//     counter--;
//     }

// }

let para = document.getElementsByTagName("p")[0];

let counter = 10;

let idInterval = setInterval(decreaseSecond, 1000);

function decreaseSecond () {
	if (counter == 0){
		clearInterval(idInterval)
	} else {
        if (counter == 1) {
            para.textContent = (`Sale ends in ${counter} second!`)
            counter--;
        }
		else {
            para.textContent = (`Sale ends in ${counter} seconds!`)
            counter--;
        }
		
	}
}

