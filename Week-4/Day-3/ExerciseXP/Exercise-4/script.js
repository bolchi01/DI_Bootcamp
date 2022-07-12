let students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];

const passStudents = students.filter((element) => element.isPassed == true)

console.log(passStudents);


            //    const characters = [
            //     { name: 'James T. Kirk', series: ['Star Trek'] },
            //     { name: 'Spock', series: ['Star Trek', 'Star Trek: The Next Generation'] },
            //     { name: 'Jean-Luc Picard', series: ['Star Trek: The Next Generation'] },
            //     { name: 'Worf', series: ['Star Trek: The Next Generation', 'Star Trek: Deep Space Nine'] }
            //  ]; 
            
            //  const NextGen = characters.filter((element) => element.series.includes('Star Trek: The Next Generation'))
            //  console.log(NextGen)