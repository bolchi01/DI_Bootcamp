let details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }

// 1. Given the object above and using a for loop, console.log “my name is Rudolf the raindeer”

for (let x in details) {
    console.log(x);
    console.log(details[x]);
}