const gameInfo = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
   ];

let usernames = [];

gameInfo.forEach((element) => usernames.push(`${element.username}!`))

console.log(usernames)

let winners = [];
let count = 0;

const winnerFunction = gameInfo.forEach (
    function(element) {
        element.score > 5 ? winners.push(element.username): count++ // how do I just skip if the condition is not met?
    }
)

console.log(winners)

let scoreCount = 0;

const gameScore = gameInfo.forEach((element) => scoreCount+= element.score) 


console.log(scoreCount);