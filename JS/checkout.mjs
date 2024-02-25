
// clear cart button
// function clearCart() {
//     localStorage.setItem('cart', JSON.stringify([]));
//     console.log('cart has been cleared')
// }

// const clearCartButton = document.getElementById('#cart-items-display');
// clearCartButton.addEventListener('click', () => {
//     clearCart();
// });

import {addToCart} from '../JS/home.js'

function generateHtmlForGame(game) {
    function removeFromCart(game) {
        let cart = JSON.parse(localStorage.getItem('cart'));
        cart = cart.filter(item => item.title !== game.title);
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    function updateCartItem(game) {
        let cart = JSON.parse(localStorage.getItem('cart'));
        const index = cart.findIndex(item => item.title === game.title);
        if (index !== -1) {
            cart[index] = game; // Update the item in the cart array
            localStorage.setItem('cart', JSON.stringify(cart)); // Save updated cart to localStorage
            generateHtmlGameTotal();
            console.log('Cart updated successfully:', cart); // Add debugging statement
        } else {
            console.error('Item not found in cart:', game); // Add debugging statement
        }
    }

    const gameWrapper = document.createElement('div');

    const gameContainer = document.createElement('div')

    const gameTitle = document.createElement('h3');
    gameTitle.textContent = game.title;

    const gameImage = document.createElement('img');
    gameImage.src = game.image.url;

    const gameQuantity = document.createElement('div');
    gameQuantity.textContent = 'Quantity: ' +  game.quantity;

    const gamePrice = document.createElement('div');
    gamePrice.textContent = 'Price: ' + game.price;

    const gamePriceTotal = document.createElement('div');
    gamePriceTotal.textContent = 'Total: ' + game.price * game.quantity;

    const quantityAdjustmentContainer = document.createElement('div');
    
    const plusQuantity = document.createElement('button');
    plusQuantity.textContent = '+';
    plusQuantity.addEventListener('click', () => {
        addToCart(game);
        game.quantity++; // Increment quantity
        gameQuantity.textContent = 'Quantity: ' + game.quantity;
        gamePriceTotal.textContent = 'Total: ' + game.price * game.quantity;
        updateCartItem(game);
    });

    const minusQuantity = document.createElement('button');
minusQuantity.textContent = '-';
minusQuantity.addEventListener('click', () => {
    if (game.quantity > 1) {
        game.quantity--;
        gameQuantity.textContent = 'Quantity: ' + game.quantity;
        gamePriceTotal.textContent = 'Total: ' + game.price * game.quantity;
        updateCartItem(game); // Update the item in localStorage
    } else {
        removeFromCart(game); // Remove the game if quantity becomes zero
        gameWrapper.remove();
    }
});

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => {
        // Remove the game from localStorage
        removeFromCart(game);
        // Remove the game container from display
        gameWrapper.remove();
    });

    console.log(game)
    gameWrapper.appendChild(gameContainer);
    quantityAdjustmentContainer.append(plusQuantity, minusQuantity);
    gameContainer.append(gameTitle, gameImage, gameQuantity, gamePrice, gamePriceTotal,quantityAdjustmentContainer, removeButton);
    return gameWrapper;
}

function generateHtmlGameTotal() {
    const combinedTotalElement = document.getElementById('combined-total');
    const cart = JSON.parse(localStorage.getItem('cart'));
    let combinedTotal = 0;

    cart.forEach(function (game) {
        combinedTotal += game.price * game.quantity;
    });

    combinedTotalElement.textContent = 'Combined Total: ' + combinedTotal;
}


// function removeFromCart(game) {
//     let cart = JSON.parse(localStorage.getItem('cart'));
//     cart = cart.filter(item => item.title !== game.title);
//     localStorage.setItem('cart', JSON.stringify(cart));
// }

function displayCartItems() {
    const displayContainer = document.getElementById('cart-items-display');
    const cart = JSON.parse(localStorage.getItem('cart'));

    cart.forEach(function (currentGame) {
        const itemHtml = generateHtmlForGame(currentGame);
        displayContainer.appendChild(itemHtml);
    });
    generateHtmlGameTotal()
}

// export function clearCart() {
//     localStorage.setItem('cart', JSON.stringify([]));
// }

function main() {
    displayCartItems();
    generateHtmlGameTotal();
}

main();

