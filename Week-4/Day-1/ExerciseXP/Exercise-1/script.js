// #1
function q1() {
    var a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(a);
}
// will alert "3"

// run in the console: '3'
q1()

//#2
var a = 0;
function q2() {
    a = 5;
}
// a = 5;

function q22() {
    alert(a);
}
// a = 0


// run in the console:
q22() //"0"
q2() // "5"
q22() // "0"

//#3
function q3() {
    window.a = "hello"; // have not seen window.a before
}


function q32() {
    alert(a); // will alert Hello
}

// run in the console: alerts Hello
q3()
q32()

//#4
var a = 1;
function q4() {
    var a = "test";
    alert(a);
}


// run in the console:
q4() // "test"

//#5
var a = 2;
if (true) {
    var a = 5;
    alert(a); // five
}
alert(a); // five