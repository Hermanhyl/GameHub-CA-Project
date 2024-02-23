import { displayGames } from "../JS/home.js";
import { API_GAMES_URL } from "./constants.mjs";
import { doFetch } from "./doFetch.mjs";



// async function main() {
//     displayGames(games);
// }

// main();



// Genre

const createAddEventListenerGenre = (games) => {
    document.getElementById ('#genres').forEach(Option => {
        Option.addEventListener('click', () => {
            filterGamesByGenre(games, Option.textContent)
        });
    });
}

const filterGamesByGenre = (games, ) => {
    if (listText === 'Show All') {
        makeGenreCard(games);
    }
    else {
        let filteredList = games.filter((games) =>
        game.genre === listText);

        makeGenreCard(filteredList);
    }
    };

    createAddEventListenerGenre(games)

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