let arrayColors = ["blue", "red", "yellow", "green", "pink", "magenta", "purple", "grey", "orange"];
// you can use an array rgba colors or hex colors
let clearbtn = document.getElementById("clearbtn");
clearbtn.addEventListener("click", clearAll);

function clearAll() {

}


function addColors (){
	let palletSection = document.getElementById("pallet")
	for(let color of arrayColors){
		let divColor = document.createElement("div");
		divColor.style.backgroundColor = color;
		palletSection.appendChild(divColor);
		divColor.addEventListener("click", pickColor);
	}
}




addColors()

function addGrid () {
	let height= 40;
	let width= 40;
	let gridPaintSection = document.getElementById("gridPaint")
	for (let i = 0; i<height*width; i++){
		let divGrid = document.createElement("div");
        divGrid.classList.add('clear');
		gridPaintSection.appendChild(divGrid);
        divGrid.addEventListener("mousedown", mouseDown)
        divGrid.addEventListener("mouseover", gridMoved)
        divGrid.addEventListener("mouseup", mouseReleased)
	}

}

addGrid()

let colorPicked;
let isClicking;

function pickColor(evt){
	colorPicked = evt.target.style.backgroundColor;
}

function mouseDown(evt) {
    divClicked = evt.target;
    divClicked.style.backgroundColor = colorPicked;
    isClicking = true;
}


function gridMoved(evt) {
        console.log("moved");
        if(isClicking) {
            divClicked = evt.target;
            divClicked.style.backgroundColor = colorPicked;
        }
}

function mouseReleased() {
    isClicking = false;
}



function clearAll() {
    grid = document.getElementsByClassName('clear');
    for (let box of grid) {
        box.style.backgroundColor = 'white';
    }
    colorPicked = 'none';
}


