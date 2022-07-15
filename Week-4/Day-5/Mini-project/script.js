// loop through the array of character objects
const robots = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      image: 'https://robohash.org/1?200x200'
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      image: 'https://robohash.org/2?200x200'
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      image: 'https://robohash.org/3?200x200'
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      image: 'https://robohash.org/4?200x200'
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      image: 'https://robohash.org/5?200x200'
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      image: 'https://robohash.org/6?200x200'
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      image: 'https://robohash.org/7?200x200'
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      image: 'https://robohash.org/8?200x200'
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      image:'https://robohash.org/9?200x200'
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      image:'https://robohash.org/10?200x200'
    }
    ];
// function for the searchbar
function searchButton() {
    searchbtn = document.getElementById('searchbar');
    searchbtn.addEventListener('input', filterFunction);
}

searchButton();

function filterFunction() {
    inputValue = document.getElementById('searchbar').value;
    let shownBoxes = [];
    let hiddenBoxes = [];
    for (let robot in robots) {
        let name = robots[robot].name.toLowerCase();
        if (name.includes(inputValue.toLowerCase())) {
            shownBoxes.push(robots[robot]);
        }
        else {
            hiddenBoxes.push(robots[robot]);
        }
    }
    for (let boxes in shownBoxes) {
        id = shownBoxes[boxes].id;
        let box = document.getElementById(id);
        box.style.display = "block";
    }
    for (let boxes in hiddenBoxes) {
        id = hiddenBoxes[boxes].id
        let box = document.getElementById(id);
        box.style.display = "none";
    }
}



function createRobots() {
    let div = document.getElementById("container")
    for (let robot in robots) {
        let robotBox = document.createElement('div');
        let name = document.createElement('h5');
        let username = document.createElement('h6');
        let email = document.createElement('p');
        let img = document.createElement('img');
        name.textContent = robots[robot].name;
        username.textContent = robots[robot].username;
        email.textContent = robots[robot].email;
        img.src = robots[robot].image;
        robotBox.setAttribute('id', robots[robot].id);
        robotBox.setAttribute('class', 'robotbox');
        div.appendChild(robotBox);
        robotBox.appendChild(name);
        robotBox.appendChild(username);
        robotBox.appendChild(email);
        robotBox.appendChild(img);
    }
}

createRobots();
// in each loop, create a div, with class, pic equal to that loop's image

// also create a search bar.
//event listener on input that checks every letter the user writes

//use input event listern
// use on the input add event listener of input (listens for every key user writes on the form)
//call a function everytime the user writes a new letter
// show a div with a similar name/email
// use filter method - condition is if the value of the inut matches/(use include) - 
// this should have an add event listener each time anything is added
// one should take the input, filter through the array to see if any match the name
// only display the ones that match the name on the page.

//style 

