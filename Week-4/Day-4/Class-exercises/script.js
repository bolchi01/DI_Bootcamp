// // let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
// // let {numPlanets, yearNeptuneDiscovered} = facts;

// // console.log(numPlanets); // 8
// // console.log(yearNeptuneDiscovered); // 1846

// // // it returns a variable numPlants = 8, and yearNeptuneDiscovered = 1846.

// // function getDetails(objHarry) {
// //     let {name, house, goodstudent} = objHarry;
// // 	console.log(name, house, goodstudent) 
// // }


// // getDetails({name: 'Harry Potter',house: 'Gryfindor',goodstudent : false});

// // let planetFacts = {
// //     numPlanets: 8,
// //     yearNeptuneDiscovered: 1846,
// //     yearMarsDiscovered: 1659
// //   };
  
// //   let {numPlanets, ...discoveryYears} = planetFacts;
  
// //   console.log(discoveryYears); // an object

// // function getMoreDetails(objHermione) {
// // 	let {name, house, friend: {friendName, age}} = objHermione;
// //     console.log(name, house, friend["friendName"], friend["age"]);
// // }

// // getMoreDetails(
// // 			{name: 'Hermione Granger', 
// // 				house: 'Gryfindor', 
// // 				friend :  {
// // 					friendName : 'Harry Potter', age : 20
// // 				}
// // 			})

// const elonPerson = {
//     first: 'Elon',
//     last: 'Musk',
//     housesLocation : ["new york", "paris"],
//     twitter: '@elonmusk',
//     company: 'Space X',
//     houses : {
//       amount: 2,
//       value : "5Million"
//     }
// }

// function getElonMuskDetails(objElon){
//     let {first: firstname, last: lastname, housesLocation: [locationOne, locationTwo], houses:{value : valueHouses}} = objElon;
// 	console.log(firstname, lastname)
// 	console.log(locationOne, locationTwo, valueHouses)
// }



// getElonMuskDetails(elonPerson)

class Tv {
    constructor(brand, channel = 1, volume = 50) {
        this.brandTV = brand;
        this.channelTV = channel;
        this.volumeTV = volume;
    }

    increaseVolume() {
        if (this.volumeTV < 100) {
            this.volumeTV += 1; 
        }

        if (this.volumeTV > 0) {
        this.volumeTV += 1;
        }
    }

    decreaseVolume() {
        this.volumeTV -= 1;
    }

    setChannel(number) {
        if (number <= 50) {
            this.channelTV = number
        }
    }

    reset() {
        this.channel = 1;
        this.volume = 50
    }

    status() {
        console.log(`${this.brandTV} at channel ${this.channelTV}, volume ${this.volume}`)
    }
}

let lgTV = new Tv("LG", 5, 70);
lgTV.decreaseVolume();

console.log(lgTV);

class SmartTv extends Tv {
    constructor(brand, channel, volume, netflix = true) {
        super(brand, channel, volume);
        this.netflix = netflix;
    }
    increaseVolume () {
        this.volumeTV += 10;
    }

    decreaseVolume () {
        this.volumeTV -= 10;
    }
}

let panasonic = new SmartTv("panasonic", 4, 20, false);
panasonic.increaseVolume();
console.log(panasonic);