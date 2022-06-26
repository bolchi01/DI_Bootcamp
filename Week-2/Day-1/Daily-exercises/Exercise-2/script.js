//Part 1///

//question 1
let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

//question 2
let myWatchedSeriesLength = myWatchedSeries.length;

//question 3
console.log(`I watched ${myWatchedSeriesLength} series: ${myWatchedSeries}`);

//Part 2//

//question 1
myWatchedSeries.splice(2, 1, 'Friends', 'Breaking Bad');

//question 2
myWatchedSeries.push('House of Cards')

//question 3
myWatchedSeries.unshift('Ozark');

//question 4
myWatchedSeries.splice(1, 1);

//question 5
console.log(myWatchedSeries[1][2]);

//question 6
console.log(myWatchedSeries);



