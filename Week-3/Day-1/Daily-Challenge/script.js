let solarSystem = [
    {name:'Mercury', color:'orange', radius:2439},
    {name:'Venus', color:'grey', radius:6051},
    {name:'Earth', color:'blue', radius:6378},
    {name:'Mars', color:'red', radius:3396},
    {name:'Jupiter', color:'brown', radius:71492},
    {name:'Saturn', color:'yellow', radius:60268},
    {name:'Uranus', color:'ligthblue', radius:25559},
    {name:'Neptune', color:'darkblue', radius:24764}
  ]
  
  //getting a section value to be used in the for loop.

  let section = document.getElementsByClassName('listPlanets')[0];
  
  for (let i = 0; i < solarSystem.length; i++) {
    let planet = document.createElement('div');
    planet.innerText = solarSystem[i].name;
    planet.classList.add('planet');
    planet.style.backgroundColor = solarSystem[i].color;
    section.appendChild(planet)
  }