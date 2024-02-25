// 1. Make it work 
// 2. Make it right 
// 3. Make it fast 

// Main idea
// Get the data
// loop through the data 
// create HTML for the individual items

{/* <div class="game-wrapper">
        <div class="game-container">
            <h3></h3>
            <div class="game-price-container">
                <div class="price"></div>
                <div class="discounted-price"></div>
            </div>
        </div>
    </div> 
    */}

import { API_GAMES_URL } from "./constants.mjs";
import { doFetch } from "./doFetch.mjs";


export const makeGenreCard = (genreList) => {
    let collectionItems = document.createElement('div');
    collectionItems.id = "collectionItems";
    collectionItems.classList = "collectionItems";

    let main = document.querySelector('main');

    main.appendChild(collectionItems);
    let row = document.getElementById('collectionItems');
    row.innerHTML = '';
    genreList.forEach((game) => 
        genreCardContent(game)
    );
}

// function createInfo() {
//     const info = localStorage.getItem('info');
//     if (!info) {
//         localStorage.setItem('info', JSON.stringify([]));
//     }
// }

// function addToinfo(game) {
//     const info = JSON.parse(localStorage.getItem('info'));
//     const itemIndex = info.findIndex(function (currentGame) {
//     if (game.id === currentGame.id) {
//         return true;
//     }
//     return false;
//     });
//     if (itemIndex === -1) {
//         info.push({ ...game, quantity: 1 });
//     } else {
//         info[itemIndex].quantity += 1;
//     }
//     localStorage.setItem('info', JSON.stringify(info));
// }


function createCart() {
    let cart = localStorage.getItem('cart');
    if (!cart) {
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
    }
}

export function addToCart(game) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    if (!Array.isArray(cart)) {
        cart = [];
    }
    const itemIndex = cart.findIndex(function (currentGame) {
        if (game.id === currentGame.id) {
            return true;
        }
        return false;
    });
    if (itemIndex === -1) {
        cart.push({ ...game, quantity: 1 });
    } else {
        cart[itemIndex].quantity += 1;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
}

function generateGameHtml(game) {
    const gameWrapper = document.createElement('div');
    gameWrapper.classList.add('game-wrapper');

    const gameContainer = document.createElement('div');
    gameContainer.classList.add('game-container');

    const gameImage = document.createElement('img');
    gameImage.src = game.image.url;

    const gameHeading = document.createElement('h3');
    gameHeading.textContent = game.title;
    
    const gameDescription = document.createElement('p');
    gameDescription.textContent = game.description;

    const gamePriceContainer = document.createElement('div');
    
    const gamePrice = document.createElement('div');
    gamePrice.textContent = 'Price: ' + game.price;

    const gameDiscountedPrice = document.createElement('div');
    gameDiscountedPrice.textContent = 'Discount: ' + game.discountedPrice;

    const gameInfoButton = document.createElement('a');
    gameInfoButton.textContent = 'View Info';
    gameInfoButton.href = "../GamePage/Gameinfo.html";
    gameInfoButton.classList = 'linkTOProduct';
    gameInfoButton.addEventListener('click', () => {
        localStorage.setItem('game', JSON.stringify(game));
    });

    const gameBuyButton = document.createElement('button');
    gameBuyButton.textContent = 'Add To Cart';
    gameBuyButton.classList.add('game-buy-button');
    gameBuyButton.addEventListener('click', () => {
        addToCart(game);
    });
    
    gamePriceContainer.append(gamePrice, gameDiscountedPrice);
    gameContainer.append(gameHeading, gameImage, gamePriceContainer, gameInfoButton,  gameBuyButton);
    gameWrapper.appendChild(gameContainer);

    return gameWrapper;
}

export function displayGames(games) {
    const gamesDisplayContainer = document.getElementById("games-display");
    games.forEach((game) => {
        const gameHtml = generateGameHtml(game);
        gamesDisplayContainer.appendChild(gameHtml);
    });
}

function showLoading() {
    const showLoading = document.getElementById('loading')
    showLoading.classList.add('active');
    showLoading.textContent = 'Loading...';
}

function hideLoading() {
    const hideLoading = document.getElementById('loading');
    hideLoading.classList.remove('active');
}

// Mock functions for demonstration purposes
// function createCart() {
//     console.log("Creating cart...");
// }


async function main() {
    createCart(); 
    try {
        const responseData = await doFetch(API_GAMES_URL);
        const games = responseData.data;
        displayGames(games);
        showLoading();
    } catch (error) {
        console.error("Error fetching data:", error);
    } finally {
        // Automatically hide the loading spinner after two seconds
        setTimeout(hideLoading, 2000);
    }
}

main();