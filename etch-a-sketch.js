
function getGridSize() {
    const gridSize = prompt('Enter grid size');
    console.log(gridSize);
    return gridSize;
}

function createGrid(gridSize) {
    const gridContainer = document.querySelector('.grid-container');
    const gridItemWidth = gridContainer.offsetWidth / gridSize;
    gridContainer.style.cssText = `
        grid-template-rows: repeat(${gridSize}, ${gridItemWidth}px); 
        grid-template-columns: repeat(${gridSize}, ${gridItemWidth}px
    `;
    for (let i = 0; i < (gridSize * gridSize); i++){
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-test');
        gridItem.addEventListener('mouseover', paintGridItem);
        gridContainer.append(gridItem);
    };
}

function paintGridItem (event){
    console.log('it works');
    event.target.style.backgroundColor = 'blue';
}

function initialize() {
const gridSize = getGridSize();
createGrid(gridSize);
}

initialize();