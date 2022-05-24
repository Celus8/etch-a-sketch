let canvas = document.querySelector("#canvas");

function createGrid(dim) {
    
    canvas.innerHTML = "";
    
    for (let i = 0; i < dim; i++) {
        rowDiv = document.createElement("div")
        canvas.appendChild(rowDiv);
        for (let j = 0; j < dim; j++) {
            rowDiv.appendChild(document.createElement("div"));
        }
    }

    let gridDivs = document.querySelectorAll("#canvas div div")
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
    let gridDivs = document.querySelectorAll("#canvas div div")
});

