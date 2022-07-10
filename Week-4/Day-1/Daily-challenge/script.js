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

gameInfo.forEach(
	function (element) {
		usernames.push(`${element.username}!`)
	}
)

let winners = [];
let count = 0;

gameInfo.forEach (
    function(element) {
        element.score > 5 ? winners.push(element.username): count++ // how do I just skip if the condition is not met?
    }
)

let scoreCount = 0;

gameInfo.forEach (
    function(element) {
        scoreCount += element.score
    }
)

console.log(scoreCount);