import {hexToDecimal, decimalToRGB, darkenRGB, darkenHex} from './modules/darkenHex.js';
// hexToDecimal('e600e6');
const colorRandom = document.querySelector('#colorBlackButton');
const colorBlack = document.querySelector('#colorRandomButton');
const erase = document.querySelector('#clear');
const eraser = document.querySelector('#eraser');
const gridSlider = document.querySelector('#gridSlider');
const darken = document.querySelector('#darkenButton');
colorBlack.addEventListener('click', setPaintColor);
colorRandom.addEventListener('click', setPaintColor);
erase.addEventListener('click', eraseColor);
eraser.addEventListener('click', setPaintColor);
gridSlider.addEventListener('mouseup', setGridSize);
darken.addEventListener('click', setPaintColor);
let paintColor = '#000000';
let randomColorIndicator = false;
let darkenColorIndicator = false;

function setGridSize(e) {
    gridSize = e.target.value;
    return createGrid(gridSize);
}

function createGrid(gridSize) {
    const gridContainer = document.querySelector('.grid-container');
    gridContainer.hasChildNodes ? gridContainer.replaceChildren() : contine();
    gridContainer.addEventListener('click', paintGridItem);
    gridContainer.addEventListener('mouseover', paintGridItem);
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
    randomColorIndicator = false;
    darkenColorIndicator = false;
    const color = event.target.getAttribute('data-color');
    switch (color) {
        case 'black' : paintColor = '#000000';
        break;
        case 'random' : randomColorIndicator = true;
        break;
        case 'eraser' : paintColor = '#ffffff'; 
        break;
        case 'darken' : darkenColorIndicator = true;
    }
    console.log(color);
}

function paintGridItem (event){
    console.log(paintColor);
    if (randomColorIndicator === true){
        paintColor = `#${getRandomColor()}`;
    }else if(darkenColorIndicator === true){
        paintColor = darkenHex(event.target.style.backgroundColor);
        console.log(paintColor);
    }
    if (event.type === 'click'){
        event.target.style.backgroundColor = paintColor;
    } else if(event.type === 'mouseover' && event.buttons === 1){
        event.target.style.backgroundColor = paintColor;
    }
}

function getRandomColor(){
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    if (randomColor.length !== 6){
         for(let i = randomColor.length; i < 6; i++){
            randomColor += '0';
         }
    }
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