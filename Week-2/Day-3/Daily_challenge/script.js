//with one loop 
for (i = 0; i < 6; i++) {
    pyramid = "*".repeat(i+1);
    console.log(pyramid);
}



//two loop method
let twoPyramid = '';

for (i = 0; i < 6; i++) {
    // this means that firs ttime around, j will print only one star as it is equal to 0, the same value as i. However, as i increase each loop, j will produce more stars.
    for (j = 0; j <= i; j++) {
        twoPyramid += '*';
    }
    twoPyramid += '\n';
}

console.log(twoPyramid)