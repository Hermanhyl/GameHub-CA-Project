// import { displayGames } from "../JS/home.js";

// displayGames();

// Function to add click event listener to each genre option
// const createAddEventListenerGenre = (games) => {
//     const selectElement = document.querySelector('#genres');
//     selectElement.addEventListener('change', (event) => {
//         const selectedGenre = event.target.value;
//         filterGamesByGenre(games, selectedGenre);
//     });
// }

// const filterGamesByGenre = (games, selectedGenre) => {
//     if (selectedGenre === 'show-all') {
//         displayGames(games);
//     } else {
//         const filteredList = games.filter(game => game.genre === selectedGenre);
//         displayGames(filteredList);
//     }
// };

// Call the function to add event listeners when the DOM content is loaded
// document.addEventListener('DOMContentLoaded', () => {
//     // Assuming 'games' is defined somewhere with the list of games
//     const games = [cart]; // Replace [...] with your list of games

//     // Add event listeners for genre selection
//     createAddEventListenerGenre(games);
// });

    // import {makeJacketCard} from "../java/index.js";  

    // export const createAddEventListenerGenderButtons = (jackets) => {     
    //     document.querySelectorAll ('.gender-ul li').forEach((li)=>{         
    //         li.addEventListener('click', ()=>{             
    //             filterByGender(jackets, li.textContent)         
    //         });     
    //     }); }  
        
    //     const filterByGender = (jackets,listText) => {     
    //         if (listText === 'Show All') {      
    //             makeJacketCard(jackets);     
    //         }     else {         
    //             let filteredList = jackets.filter((jacket) =>         
    //             jacket.gender === listText);          
    //             makeJacketCard(filteredList);     
    //         } }
    
    
    // import { createAddEventListenerGenderButtons } from "../components/filter.mjs";
    // createAddEventListenerGenderButtons(jacketList);