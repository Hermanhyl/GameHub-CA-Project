
function generateHtmlForGame(game) {
    const gameWrapper = document.createElement('div');

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

    const gameRemoveButton = document.createElement('button');
    gameRemoveButton.textContent = 'REMOVE';
    gameRemoveButton.classList.add('game-remove-button');
    gameRemoveButton.addEventListener('click', () => {
        
    });

    console.log(game)
    gameWrapper.append(gameTitle, gameImage, gameQuantity, gamePrice, gamePriceTotal, gameRemoveButton);
    return gameWrapper;
}

function displayCartItems() {
    const displayContainer = document.getElementById('cart-items-display');
    const cart = JSON.parse(localStorage.getItem('cart'));

    cart.forEach(function (currentGame) {
        const itemHtml = generateHtmlForGame(currentGame);
        displayContainer.appendChild(itemHtml);
    });
}

function main() {
    displayCartItems();
}

main();