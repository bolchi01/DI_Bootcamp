let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

names.sort();

let secretName = [];

for (let i in names) {  
    secretName.push(names[i].charAt(0));
}

console.log(secretName);

