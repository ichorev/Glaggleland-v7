const gameBoard = document.getElementById('game-board');
const character = document.getElementById('character');
const collectible = document.getElementById('collectible');
const hazard = document.getElementById('hazard');

// Create a function to handle character movement
function moveCharacter(direction) {
    const rect = character.getBoundingClientRect();
    if (direction === 'up') {
        character.style.top = (rect.top - 10) + 'px';
    } else if (direction === 'down') {
        character.style.top = (rect.top + 10) + 'px';
    } else if (direction === 'left') {
        character.style.left = (rect.left - 10) + 'px';
    } else if (direction === 'right') {
        character.style.left = (rect.left + 10) + 'px';
    }
}

// Create a function to handle collectible pickup
function pickupCollectible() {
    const rect1 = character.getBoundingClientRect();
    const rect2 = collectible.getBoundingClientRect();
    if (rect1.left <= rect2.left + 50 && rect1.left >= rect2.left - 50 &&
        rect1.top <= rect2.top + 50 && rect1.top >= rect2.top - 50) {
        collectible.style.display = 'none';
    }
}

// Create a function to handle environmental hazard avoidance
function avoidHazard() {
    const rect1 = character.getBoundingClientRect();
    const rect2 = hazard.getBoundingClientRect();
    if (rect1.left <= rect2.left + 50 && rect1.left >= rect2.left - 50 &&
        rect1.top <= rect2.top + 50 && rect1.top >= rect2.top - 50) {
        alert('Game Over');
        location.reload();
    }
}

// Create a function to handle game loop
function gameLoop() {
    pickupCollectible();
    avoidHazard();
    requestAnimationFrame(gameLoop);
}

// Start the game loop
gameLoop();

// Add event listeners for character movement
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp') {
        moveCharacter('up');
    } else if (event.key === 'ArrowDown') {
        moveCharacter('down');
    } else if (event.key === 'ArrowLeft') {
        moveCharacter('left');
    } else if (event.key === 'ArrowRight') {
        moveCharacter('right');
    }
});