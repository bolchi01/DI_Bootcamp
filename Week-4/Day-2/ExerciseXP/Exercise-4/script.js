(function (username) {
    let aTag = document.getElementById('username');
    let text = document.createTextNode(username);
    aTag.appendChild(text);
})('Dave')