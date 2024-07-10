const optionContainer = document.querySelector('.option-container');
const flipButton = document.querySelector('#flip-button');
const gameBoardsContainer = document.querySelector("#gameboards-container")


// Option Coosing
let angle = 0
function flip(){
    const optionShips = (Array.from(optionContainer.children));
    angle = angle === 0 ? 90 : 0;
    optionShips.forEach(optionShip => optionShip.style.transform = `rotate(${angle}deg)`);
}

// Creating Boards
const width = 10;

function createBoard(user){
    const gameBoardContainer = document.createElement('div');
    gameBoardContainer.classList.add('game-board');
    gameBoardContainer.style.backgroundColor = '#006994';
    gameBoardContainer.id = user;

    for (let i = 0; i < width * width; i++){
        const block = document.createElement('div');
        block.classList.add('block');
        block.id = i;
        gameBoardContainer.append(block);
    }

    gameBoardsContainer.append(gameBoardContainer);
}

createBoard('player');
createBoard('computer');
flipButton.addEventListener('click', flip);