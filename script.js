let canvas = document.querySelector("#canvas");

function createGrid(dim) {
    
    if (dim > 100) {
        alert("The dimension cannot exceed 100 units!");
        return;
    }

    canvas.innerHTML = "";
    
    for (let i = 0; i < dim; i++) {
        rowDiv = document.createElement("div")
        canvas.appendChild(rowDiv);
        for (let j = 0; j < dim; j++) {
            rowDiv.appendChild(document.createElement("div"));
        }
    }

    let gridDivs = document.querySelectorAll("#canvas div div")

    let size = 640 / dim; // 640 = 40 * 16 is the original size

    gridDivs.forEach((currentValue) => {
        currentValue.style.cssText = `width: ${size}px; height: ${size}px;`;
    })

    gridDivs.forEach((currentValue) => {
        currentValue.addEventListener("mouseenter", () => {
        currentValue.style.backgroundColor = "black";
    })});

}

createGrid(16);

let newGrid = document.querySelector("#newGrid");

newGrid.addEventListener("click", () => {
    let dim = prompt("What size should it have?");
    createGrid(dim);
});

