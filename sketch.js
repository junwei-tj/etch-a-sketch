const container = document.querySelector("#container");
console.log(container);
container.className = "container";

function createGrid(n) {
    container.setAttribute("style", `grid-template-columns: repeat(${n}, 1fr); grid-template-rows: repeat(${n}, 1fr);`);
    for (let i = 0; i < n*n; i++) {
        const cell = document.createElement("div");
        cell.className = "cell";
        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = "lightblue";
        })
        container.appendChild(cell);
    }
}

function clearGrid() {
    const cells = document.getElementsByClassName("cell");
    for (let i = cells.length-1; i >= 0; i--) {
        container.removeChild(cells[i]);
    }
}

const clearButton = document.querySelector("#clear-button");
console.log(clearButton);
clearButton.addEventListener("click", (e) => {
    clearGrid();
    let gridSize = prompt("How many squares per side?");
    createGrid(gridSize);
});

createGrid(16);