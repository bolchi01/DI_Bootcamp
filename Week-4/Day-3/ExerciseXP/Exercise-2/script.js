let users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];


let newArr = users.map((val, i, arr) => {
    return `Hello ${val["firstName"]}`
})

console.log(newArr);


// myArr = [10,20,30,40];

// let newArr = myArr.map((val, i, arr) => {
//   return {
//     value: val,
//     index: i
//   };
// });

// console.log(newArr);