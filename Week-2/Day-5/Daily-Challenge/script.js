
function beerSong() {
    // to get a positive number from the user
    do{
    number = Number(prompt("How many bottles?"));
    } while(isNaN(number) || number < 1);

    //to create an open string that can be added to in the for loop
    let song = "";

    // i needs to equal 1, rather than 0, as we will use it later in the song
    for(let i = 1; number > 0; i++){
        //for the remainder at the end
    if(i > number){
        i = number;
    }
    let itOrThem = "them";
    // make sure the song says it for one bottle
    if(i == 1){
        itOrThem = "it"
    }
    // make sure that the grammar is correct for bottles
    let numBottles = "bottles";
    if(number == 1){
        numBottles = "bottle";
    }
    // add to the
    song += `${number} ${numBottles} of beer on the wall\n${number} ${numBottles} of beer\nTake ${i} down, pass ${itOrThem} around\n`;
    number -= i;
    if(number == 1){
        numBottles = "bottle";
    }
    song += `${number} ${numBottles} of beer on the wall\n`;
    }

    console.log(song);
}

beerSong()