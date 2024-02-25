import { displayGames } from "./home.js";

    export function AddGenreEventListenerButtons(games) {     
    document.querySelectorAll('#genre-list li').forEach((li) => {
        li.addEventListener('click', () => {
            filterGamesByGenre(games, li.textContent)
        })
    }
    )

    }

    
    function filterGamesByGenre(games, genre) {
    if (genre === 'Show All') {
        displayGames(games)
    } else {
        let sortedList = games.filter((game) => game.genre === genre)
        displayGames(sortedList);
    } 
}

    // function closeGenreFilter() {
    //     const genreList = document.getElementById('sortByGenre');
    //     genreList.removeAttribute('open')
    // }

// const actionGenreButton = document.getElementById('genre-action');
// const adventureGenreButton = document.getElementById('genre-adventure');
// const horrorGenreButton = document.getElementById('genre-horror');
// const sportsGenreButton = document.getElementById('genre-sports');

// actionGenreButton.addEventListener('click', () => {
//     chosenGenre = 'Action';
//     renderHomePage();
// });
// adventureGenreButton.addEventListener('click', () => {
//     chosenGenre = 'Adventure';
//     renderHomePage();
// });
// horrorGenreButton.addEventListener('click', () => {
//     chosenGenre = 'Horror';
//     renderHomePage();
// });
// sportsGenreButton.addEventListener('click', () => {
//     chosenGenre = 'Sports';
//     renderHomePage();
// });

