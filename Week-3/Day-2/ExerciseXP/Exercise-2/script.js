// form = document.forms[0]

// // console.log(form);

// // could also do 

// // form = document.forms[0]

// // fname = document.getElementById('fname');

// // console.log(fname);

// // lname = document.getElementById('lname');

// // console.log(lname);

// // submit = document.getElementById('submit');

// // console.log(submit);

// fname = form.elements.fname

// console.log(fname);

// lname = form.elements.lname

// console.log(lname);

let users = []

// retrieve the form

let userForm = document.forms[0];

// add event listener

userForm.addEventListener("submit", addUser);

// specify the function

function addUser (ev) {
  ev.preventDefault(); // to prevent the form from refreshing
  let objUser = {
    fname : userForm.elements.fname.value,
    lname : userForm.elements.lname.value,
  }
  users.push(objUser);
  let ul = document.getElementsByClassName('usersAnswer')[0];
  fnameText = userForm.elements.fname.value;
  lnameText = userForm.elements.lname.value;
  let li = document.createElement('li');
    let text = document.createTextNode(`${fnameText} : ${lnameText}`);
    li.appendChild(text);
    ul.appendChild(li);
  }


// showing the books

//need help on making this function append properly
// function logSubmit(event) {
//   //to get the value
//     fnameValue = fname.value 
//     lnameValue = lname.value

//     liFname = document.createElement('li')
//     ul = document.getElementsByTagName('ul')[0]
//     ul.appendChild(liFname)
//     liFname.textContent = fname.value

//     event.preventDefault();
//   }


//   logSubmit();










