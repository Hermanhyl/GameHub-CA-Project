import { displayGames } from "../JS/home.js";

const createAddEventListenerGenre = (games) => {
    document.querySelector ('#genre-ul').forEach((Option) => {
        Option.addEventListener('click', () => {
            filterGamesByGenre(games, Option.textContent);
        });
    });
}

createAddEventListenerGenre(games);

const filterGamesByGenre = (games, ) => {
    if (listText === 'Show All') {
        displayGames(games);
    }
    else {
        let filteredList = games.filter((games) =>
        game.genre === listText);

        displayGames(filteredList);
    }
    };

