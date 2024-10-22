const gridContainer = document.querySelector(".container")
const rangeInput = document.querySelector("#rangeInput");
const rangeValue = document.querySelector("#rangeValue");
const resetButton = document.querySelector("#resetGrid")
const gridWidthTotal = 500;

function randomColor() {
    const letters = "0123456789ABCDEF";
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

resetButton.addEventListener('click', () => {
    let resetDivs = document.querySelectorAll("div");
    resetDivs.forEach(element => {
        element.style.backgroundColor = "white";
    })
});

function createGrid(gridSize) {
    gridContainer.innerHTML = '';

    for (let i = 1; i < gridSize    ; i++) {
        const div = document.createElement('div');
        div.classList.add('divContainer');
        gridContainer.appendChild(div);

        for (let j = 0; j < gridSize; j++) {
            const childDiv = document.createElement('div');
            childDiv.style.width = `${gridWidthTotal / gridSize}px`
            childDiv.style.height = `${gridWidthTotal / gridSize}px`

            childDiv.addEventListener('mouseenter', () => {
                childDiv.style.backgroundColor = randomColor();
            });

            div.appendChild(childDiv);
        }
        gridContainer.appendChild(div);
    }
}

createGrid(rangeInput.value);

rangeInput.addEventListener("input", () => {
    const gridSize = rangeInput.value;
    rangeValue.textContent = gridSize;
    createGrid(gridSize)
})