firstHeader = document.getElementsByTagName('h1')[0];
console.log(firstHeader);

lastParagraph = document.getElementsByTagName('p')[3];

lastParagraph.remove();

secondHeader = document.getElementsByTagName('h2')[0];

secondHeader.addEventListener("click", RespondClick);

function RespondClick() {
    secondHeader.style.backgroundColor = "red";
}

thirdHeader = document.getElementsByTagName('h3')[0];

thirdHeader.addEventListener("click", ClickHide);

function ClickHide() {
    thirdHeader.style.display = "none";
}

button = document.createElement('button');
button.innerHTML = "Button";
document.body.appendChild(button);

button.addEventListener("click", ClickBold)

function ClickBold() {
    document.body.style.fontWeight = "bold";
}
