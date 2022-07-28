let products = [
    {
        id: 0,
        name: "Deluxe Bicycle",
        url: "https://image.shutterstock.com/image-photo/yellow-black-29er-mountainbike-thick-600w-1498702814.jpg",
        price: 499.98
    },
    {
        id: 1,
        name: "Super Deluxe bagpack",
        url: "https://image.shutterstock.com/image-photo/yellow-school-backpack-isolated-on-600w-534499549.jpg",
        price: 134.99
    },
    {
        id: 2,
        name: "Super Duper Scooter",
        url: "https://image.shutterstock.com/image-illustration/yellow-retro-vintage-scooter-isolated-600w-1421727647.jpg",
        price: 1090.95
    },
    {
        id: 3,
        name: "Smartphone",
        url: "https://image.shutterstock.com/image-vector/concept-touch-screen-smartphone-blank-600w-1433190200.jpg",
        price: 399.99
    }
];


(function () {
    let div = document.getElementById("container"); 
    let h5 = document.getElementsByTagName('h5')[0];
    console.log(h5);
    for (let product in products) {
        let product_card = document.createElement('div');
        let name = document.createElement('h5');
        name.textContent = products[product]['name']; 
        let price =   document.createElement('h6')
        price.textContent = products[product]['price'];
        let img = document.createElement('img');
        img.src = products[product]['url']
        product_card.setAttribute('id', products[product]['id'])
        div.appendChild(product_card); // here it won't append child...
        product_card.appendChild(name);
        product_card.appendChild(price);
        product_card.appendChild(img);
    }
})();

