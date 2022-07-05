document.getElementById('navBar').setAttribute('id', 'socialNetworkNavigation');

let ul = document.getElementsByTagName('ul')[0];

logout = document.createElement('li');

logout.textContent = "Logout";

ul.appendChild(logout);