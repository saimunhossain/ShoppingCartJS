'use strict';

const cart = [];
const cartDOM = document.querySelector('.cart');
const addToCartButtonsDOM = document.querySelectorAll('[data-action="ADD_TO_CART"]');

addToCartButtonsDOM.forEach(addToCartButtonDOM => {
    addToCartButtonDOM.addEventListener('click', () => {
        const productDOM = addToCartButtonDOM.parentNode;
        const product = {
            image: productDOM.querySelector('.product__image').getAttribute('src'),
            name: productDOM.querySelector('.product__name').innerText,
            price: productDOM.querySelector('.product__price').innerText,
            quantity: 1,
        };

        const isInCart = (cart.filter(cartItem => (cartItem.name === product.name)).length > 0);

        if(!isInCart){
            cartDOM.insertAdjacentHTML('beforeend', `
            <div class="cart__item">
                <img class="cart__item__image" src="${product.image}" alt="${product.name}">
                <h3 class="cart__item__name">${product.name}</h3>
                <h3 class="cart__item__price">${product.price}</h3>
                <button class="btn btn--primary btn--small" data-action="DECREASE_ITEM">&minus;</button>
                <h3 class="cart__item__quantity">${product.quantity}</h3>
                <button class="btn btn--primary btn--small" data-action="INCREASE_ITEM">&plus;</button>
                <button class="btn btn--danger btn--small" data-action="REMOVE_ITEM">&times;</button>
            </div>
            `);
            cart.push(product);
            addToCartButtonDOM.innerText = "In Cart";   
        }
        
    });
});
