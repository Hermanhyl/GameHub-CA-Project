import { API_GAMES_URL } from "./constants.mjs";
import { doFetch } from "./doFetch.mjs";

// loading 

async function apiCall() {
    
    const response = await doFetch(API_GAMES_URL);
    const json = await response.json();
    return json; 
}

function stopLoading() {
    const gameList = document.getElementById('games-display');
    // Patch the article class to remove the loading class
    gameList.classList.remove("loading");
}

async function updateGamesList(game) {
    // Search the document for the root element we want to update
    const gameList = document.getElementById('games-display');
    // Search inside the article for the elements we want to update
    const image = gameList.querySelector('img');
    const heading = gameList.querySelector('h3');
    const description = gameList.querySelector('p');

    // Patch each child element
    image.src = game.image;
    heading.textContent = game.title;
    description.textContent = game.description;
    
    // Patch the game id
    gameList.id = game.id;

    return gameList;
}

async function example() {
    const game = await apiCall();
    const gameList = updateGamesList(game);
    console.log(gameList);
    stopLoading();
}

example(); 