
function volume(length) {
    return function(weight) {
        return function(height) {
            return length * height * weight;
        }
    }
}

let lengthTen = volume(10);
console.log(lengthTen(10)(15))
console.log(lengthTen(5)(4))

let weightTwo = lengthTen(2);
console.log(weightTwo(5));