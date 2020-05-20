function createGrid(n) {
    container.setAttribute("style", `grid-template-columns: repeat(${n}, 1fr); grid-template-rows: repeat(${n}, 1fr);`);
    for (let i = 0; i < n*n; i++) {
        const cell = document.createElement("div");
        cell.className = "cell";
        cell.style.opacity = 0.4;
        cell.addEventListener("mouseover", () => {
            cell.className = "cell-hovered";
            cell.style.opacity = Number(cell.style.opacity) + 0.1;
        });
        container.appendChild(cell);
    }
}

function clearGrid() {
    const cells = document.querySelectorAll(".cell, .cell-hovered");
    for (let i = cells.length-1; i >= 0; i--) {
        container.removeChild(cells[i]);
    }
}

function randomRGBValue() { // for rainbow colored cells
    return Math.floor(Math.random()*256);
}

function changeColors() {
    const cells = document.querySelectorAll(".cell, .cell-hovered");
    if (document.getElementById("default-colors").checked) {
        cells.forEach(cell => changeCellColor(cell, "lightblue"));
    } else if (document.getElementById("random-colors").checked) {
        cells.forEach(cell => {
            changeCellColor(cell, `rgba(${randomRGBValue()}, ${randomRGBValue()}, ${randomRGBValue()})`);                   
        })
    } else if (document.getElementById("custom-colors").checked) { 
        const colorPicker = document.querySelector("#color-picker");
        let colorSelected = colorPicker.value;
        colorPicker.addEventListener("change", () => {
            colorSelected = colorPicker.value;
            cells.forEach(cell => changeCellColor(cell, colorSelected));
        })    
        console.log(colorSelected);          
        cells.forEach(cell => changeCellColor(cell, colorSelected)); // for if button selected but color not changed
    }
}

function changeCellColor(cell, color) {    
    cell.addEventListener("mouseover", () => {
        cell.style.backgroundColor = color;
    })   
}

// initialize grid
const container = document.querySelector("#container");
createGrid(16);

// prepare reset button
const resetButton = document.querySelector("#reset-button");
console.log(resetButton);
resetButton.addEventListener("click", (e) => {
    clearGrid();
    let gridSize = prompt("How many squares per side?");
    createGrid(gridSize);
    const defaultButton = document.querySelector("#default-colors");
    defaultButton.checked = true;
});

// prepare buttons for changing colors
const buttons = document.querySelectorAll(".radio-buttons");
buttons.forEach(button => button.addEventListener("click", () => {
    changeColors();
}));