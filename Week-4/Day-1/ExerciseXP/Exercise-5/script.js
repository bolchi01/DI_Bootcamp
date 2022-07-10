let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
let ordinal = ["th","st","nd","rd"];

// can't figure out a way to sucintly use a ternary operator with so many else ifs.

color.forEach(
    function(element, index) {
        if (index == 0) {
            console.log(`1 ${ordinal[1]} color is ${element}`)
        }
        else if (index == 1) {
            console.log(`2 ${ordinal[2]} color is ${element}`)
        }
        else if (index == 2) {
            console.log(`3 ${ordinal[3]} color is ${element}`)
        }
        else { 
            console.log(`${index + 1} ${ordinal[0]} color is ${element}`)
        }
    }
)

