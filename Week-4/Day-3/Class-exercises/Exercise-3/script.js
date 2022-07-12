let numbers = [-23,-20,-17, -12, -5, 0, 1, 5, 12, 19, 20];

const newNumbers = numbers.filter((number) => number >= 0);

console.log(newNumbers);

const characters = [
    { name: 'James T. Kirk', series: ['Star Trek'] },
    { name: 'Spock', series: ['Star Trek', 'Star Trek: The Next Generation'] },
    { name: 'Jean-Luc Picard', series: ['Star Trek: The Next Generation'] },
    { name: 'Worf', series: ['Star Trek: The Next Generation', 'Star Trek: Deep Space Nine'] }
 ]; 

 const NextGen = characters.filter((element) => element.series.includes('Star Trek: The Next Generation'))
 console.log(NextGen)