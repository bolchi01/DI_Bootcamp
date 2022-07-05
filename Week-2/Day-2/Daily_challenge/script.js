let sentence = "The movie is not that bad, I like it";

let wordNot = sentence.indexOf("not");

let wordBad = sentence.indexOf("bad");

if (wordNot < wordBad) {
    console.log(sentence.replace(/not.*bad/, "good"));
}

else if (wordNot <! wordBad) {
    console.log(sentence.replace(/not.*bad/, "good"));
}

