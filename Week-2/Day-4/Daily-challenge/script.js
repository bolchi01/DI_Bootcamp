// words = []
// let string = '';
// // for (i = 0; i < 5; i++) {
// //     word = prompt("give me five words")
// //     words.push(word);
// // }

// for (let i = 0; i < 7; i++) {
//     for (let j = 0; j < 7; j++) {
//         if(i === 0 || i === 6) {
//             string += '*';
//         }
//         else if(j === 0 || j === 6) {
//             string += '*';
//         }
//         else {
//             string += ' ';
//         }
//         string += '*';
//     }
//     string += '\n';
// }
// console.log(string);

// I still don't know how to fit the words into the box, even though I have the full array.
var words = [];
for(var i = 0; i < 5; i++)
   words.push(prompt("Give me five words: "));
console.log(words);
a = words.length;

let n = 10; // row or column count
// defining an empty string
let string = "";

for(let i = 0; i < a; i++) { // external loop
  for(let j = 0; j < a; j++) { // internal loop
    if(i === 0 || i === a - 1) {
      string += "*";
    }
    else {
      if(j === 0 || j === a - 1) {
        string += "*";
      }
      else {
        string += " ";
      }
    }
  }
  // newline after each row
  string += "\n";
}
// printing the string
console.log(string);