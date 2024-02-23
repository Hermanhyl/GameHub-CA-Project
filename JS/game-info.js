

const game = JSON.parse(localStorage.getItem('game'));
console.log('game')

function generateHtmlInfoGame(game) {

    let displayGame = document.querySelector('#display-game-info');

    const gameWrapper = document.createElement('div');

    const gameImage = document.createElement('img');
    gameImage.src = game.image.url;
    gameImage.alt = game.image.alt;

    const gameTitle = document.createElement('h3')
    gameTitle.textContent = game.title;

    const gameDescription = document.createElement('p')
    gameTitle.textContent = game.description;

    const gamePrice = document.createElement('div');
    gamePrice.textContent = 'Price: ' + game.price; 

    const gameAgeRestriction = document.createElement('div');
    gameAgeRestriction.textContent = 'Age: ' + game.ageRating;

    const gameGenre = document.createElement('div');
    gameGenre.textContent = 'Genre: ' + game.genre;

    const gameReleaseDate = document.createElement('div');
    gameReleaseDate.textContent = 'Release Date: ' + game.released; 

    console.log(game)

    displayGame.appendChild(gameWrapper);
    gameWrapper.append(gameImage, gameTitle, gameDescription, gamePrice, gameAgeRestriction, 
        gameGenre, gameReleaseDate);
    return gameWrapper;
}

generateHtmlInfoGame(game)

//const displayContainer = document.getElementById('display-game-info');
//const gameHtml = generateHtmlInfoGame(game);
//displayContainer.appendChild(gameHtml);

function displayGameInfo() {
    //const displayContainer = document.getElementById('display-game-info');
    //const cart = JSON.parse(localStorage.getItem('game'));

    // cart.forEach(function (currentGame) {
    //     const itemHtml = generateHtmlInfoGame(currentGame);
    //     displayContainer.appendChild(itemHtml);
    // });
}

function main() {
    displayGameInfo();
}

main();