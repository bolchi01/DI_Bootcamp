let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];

if (users.length == 0) {
    console.log("There are no Users online");
}
if (users.length == 1) {
    console.log(users[0]);
}
if (users.length == 2) {
    console.log(`${users[0]} and ${users[1]} are online`);
}
if (users.length > 2) {
    console.log(`${users[0]}, ${users[1]} and ${users.length - 1} others are online!`);
}


