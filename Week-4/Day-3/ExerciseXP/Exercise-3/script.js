let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

const nameList = epic.reduce((acc, word) =>
    `${acc} ${word}` 
)

console.log(nameList);