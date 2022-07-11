(function (numberOfChildren, nameOfPartner, location, job) {
    let div = document.getElementById('container');
    let sentence = document.createTextNode('You will be a ' + job + ' in ' + location + ', and married to ' + nameOfPartner + ' with ' + numberOfChildren + ' kids.')
    div.appendChild(sentence);
})(3, "Lucy", "New York", "banker")

// "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."

