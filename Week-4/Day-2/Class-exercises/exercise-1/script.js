(function (username){
    let div = document.getElementById('container');
    let text = document.createTextNode(username);
    let h1 = document.createElement('h1')
    h1.appendChild(text);
    div.appendChild(h1);
})("John")

(username => {
    let div = document.getElementById('container');
    let text = document.createTextNode(username);
    let h1 = document.createElement('h1')
    h1.appendChild(text);
    div.appendChild(h1);
})("John")