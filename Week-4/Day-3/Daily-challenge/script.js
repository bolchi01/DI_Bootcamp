// Part 1

let inventory = [
    { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
    { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
    { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
    { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
    { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
  ];


function getCarHonda(carInventory) {
    Hondas = carInventory.filter((element) => element.car_make == "Honda")
    firstCar = Hondas[0];
    sentence = `This is a ${firstCar.car_make} ${firstCar.car_model} from ${firstCar.car_year}`;
    return sentence
}

console.log(getCarHonda(inventory));

function sortCarInventoryByYear(carInventory) {
    sortedCars = carInventory.car_year.sort(compareNumbers)
    return sortedCars
}

console.log(sortCarInventoryByYear(inventory))


