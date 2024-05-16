let iconCart = document.querySelector('.icon-cart');
let closeCart = document.querySelector('.close');
let body = document.querySelector('.body');
let listProductHTML = document.querySelector('.listProduct');

let listProducts = [];

iconCart.addEventListener('click', () => {
    body.classList.toggle('showCart')
})

const addDataToHTML = () => {
    listProductHTML.innerHTML = '';
    if(listProducts.length > 0){
        listProducts.forEach(product => {
            let newProduct = document.createElement('div');
            newProduct.classList.add('iten');
            newProduct.innerHTML = `
            <img src="${PRODUCTS.image}">
            <h2>${PRODUCTS.name}</h2>
            <div class="price">$${PRODUCTS.price}</div>
            <button class="addCart">
                ADD TO CART
            </button>
            `;
            listProductHTML.appendChild(newProduct);
        })
    }
}

const initApp = () => {
    // get data from json
    fetch('PRODUCTS.json')
    .then(Response => Response.json)
    .then(data => {
        listProducts = data;
        addDataToHTML();
    })
}