// 1st daily challenge

const makeAllCaps = function(arr) {
    return new Promise((resolve, reject) => {
        let result = arr.every((element) => typeof element === 'string');
        if (result){
            let newArr = arr.map((element) => elem.toUpperCase());
            resolve(newArr);
        } else {
            reject("Not all items are strings");
        }
    })
}

