let formUser = document.forms[0];


const retrieveData = function (event) {
    event.preventDefault();
    let firstInput = event.target.elements.username.value;
    let secondInput = event.target.elements.lastname.value;

    const objUser = {
        username : firstInput,
        lastname : secondInput
    }

    const jsonString = JSON.stringify(objUser);
    let p = document.createElement('p');
    let text = document.createTextNode(jsonString);
    p.appendChild(text);
    document.body.appendChild(text)

}

formUser.addEventListener("submit", retrieveData);
