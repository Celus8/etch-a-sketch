let canvas = document.querySelector("#canvas");

function createGrid(dim) {
    let rowDiv;
    
    for (let i = 0; i < dim; i++) {
        rowDiv = document.createElement("div")
        canvas.appendChild(rowDiv);
        for (let j = 0; j < dim; j++) {
            rowDiv.appendChild(document.createElement("div"));
        }
    }
}

createGrid(16);

let gridDivs = document.querySelectorAll("#canvas div")