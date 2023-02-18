const colorRandom = document.querySelector('#colorBlackButton');
const colorBlack = document.querySelector('#colorRandomButton')
const erase = document.querySelector('#clear');
const eraser = document.querySelector('#eraser');
const gridSlider = document.querySelector('#gridSlider');
colorBlack.addEventListener('click', setPaintColor);
colorRandom.addEventListener('click', setPaintColor);
erase.addEventListener('click', eraseColor);
eraser.addEventListener('click', setPaintColor);
gridSlider.addEventListener('mouseup', setGridSize);
let paintColor = '#000000'

function setGridSize(e) {
    gridSize = e.target.value;
    return createGrid(gridSize);
}

function createGrid(gridSize) {
    const gridContainer = document.querySelector('.grid-container');
    gridContainer.hasChildNodes ? gridContainer.replaceChildren() : contine();
    gridContainer.addEventListener('click', paintGridItem);
    gridContainer.addEventListener('mousemove', paintGridItem);
    const gridItemWidth = gridContainer.offsetWidth / gridSize;
    gridContainer.style.cssText = `
        grid-template-rows: repeat(${gridSize}, ${gridItemWidth}px); 
        grid-template-columns: repeat(${gridSize}, ${gridItemWidth}px
    `;
    for (let i = 0; i < (gridSize * gridSize); i++){
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
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
        case 'eraser' : paintColor = '#ffffff';
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

function eraseColor (){
    const gridItems = document.querySelector('.grid-container').children;
    for(const item of gridItems){
        item.style.backgroundColor = '#ffffff';
    }
}

function initialize() {
    const gridSize = 20;
    createGrid(gridSize);
}

initialize();