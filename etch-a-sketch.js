const colorRandom = document.querySelector('#colorBlackButton');
const colorBlack = document.querySelector('#colorRandomButton')
colorBlack.addEventListener('click', setPaintColor);
colorRandom.addEventListener('click', setPaintColor);
let paintColor = '#000000'

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
        gridItem.classList.add('grid-item');
        gridItem.addEventListener('click', paintGridItem);
        gridItem.addEventListener('mousemove', paintGridItem);
        gridContainer.append(gridItem);
    };
}

function setPaintColor(event) {
    const color = event.target.getAttribute('data-color');
    switch (color) {
        case 'black' : paintColor = '#000000';
        break;
        case 'random' : paintColor = `#${getRandomColor()}`;
        break;
    }
    console.log(color);
}

function paintGridItem (event){
    if (event.type === 'click'){
        event.target.style.backgroundColor = paintColor;
    } else if(event.type === 'mousemove' && event.buttons === 1){
        event.target.style.backgroundColor = paintColor;
    } 
}

function getRandomColor(){
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}

function initialize() {
    const gridSize = getGridSize();
    createGrid(gridSize);
}

initialize();