function randomWord() {
    fetch('http://random-word-api.herokuapp.com/word?number=1')
    .then(res => {
    return res.json() 

    })
    .then(word => { 
         console.log(word)
         //you need to call the function in the then, so the function will be called after the word has been found
         gifCreator(word[0]);
         console.log('done');
    })
}

randomWord()

function gifCreator(word) {
    //no need to console.lo it here, just fetch
    console.log(fetch(`https:https://api.giphy.com/v1/gifs/random?tag=%22${word}%22&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`))
    .then(response => response.json())
    .then(json => {
    json.data
       //why do you do a foreach ? you reveive 1 gif every time, not an array
      .forEach(url => {
        let img = document.createElement('img')
        img.src = url
        document.body.appendChild(img)
      })
  })
}