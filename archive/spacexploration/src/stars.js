// CONFIGURABLE SETTINGS
const starAmount = 250; // Amount of stars to be displayed
const elementName = ".stars"; // The name of the element for the stars to be grouped in
const minDelay = 0; // Minimum delay in milliseconds
const maxDelay = 5000; // Maximum delay in milliseconds
const gridSize = 20; // The size of the grid in cells

// DO NOT MODIFY BELOW
const groupClass = document.querySelector(elementName);
const cellSize = 100 / gridSize;
const usedCells = new Set();

function fadeStar(star) {
    const randomDelay = Math.floor(Math.random() * 5000);
    const fadeOutDuration = Math.floor(Math.random() * 8000);

    setTimeout(() => {
        if (star.style.opacity !== "0") {
            star.style.opacity = "0";
            setTimeout(() => {
                star.style.opacity = "1";
                fadeStar(star);
            }, fadeOutDuration);
        }
    }, randomDelay);
}

for (let i = 0; i < starAmount; i++) {
    let cellX = Math.floor(Math.random() * gridSize);
    let cellY = Math.floor(Math.random() * gridSize);
    
    while (usedCells.has(`${cellX},${cellY}`)) {
        cellX = (cellX + 1) % gridSize;
        if (cellX === 0) {
            cellY = (cellY + 1) % gridSize;
        }
    }

    usedCells.add(`${cellX},${cellY}`);

    const newStar = document.createElement("div");
    newStar.classList.add("star");
    newStar.style.top = `${cellY * cellSize + Math.floor(Math.random() * cellSize)}%`;
    newStar.style.left = `${cellX * cellSize + Math.floor(Math.random() * cellSize)}%`;

    groupClass.appendChild(newStar);

    fadeStar(newStar);
}