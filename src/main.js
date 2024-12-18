let button = document.querySelector("button");
button.onclick = function(){
    let row = parseInt(prompt("enter rows (less than 100)"));
    if (row == null || !Number.isInteger(row) || row > 100 || row <= 0){
        alert("wrong input");
        row = 16;
    }

    let col = parseInt(prompt("enter columns (less than 100)"));
    if (col == null || !Number.isInteger(col) || col > 100 || col <= 0){
        alert("wrong input");
        col = 16;
    }

    make_board(row, col);
}

function make_board(rows, cols){
    let container = document.querySelector(".container");
    while(container.firstChild)
        container.removeChild(container.lastChild);

    for(i = 0; i < rows; i++){
        let row = document.createElement("div");
        row.classList.add("row")
        container.appendChild(row);
        for (j = 0; j < cols; j++){
            let cell = document.createElement("div");
            cell.classList.add("col");
            cell.style.opacity = .1;
            row.appendChild(cell);
        }
    }
    document.body.append(container);

    let cells = document.querySelectorAll(".col");
    cells.forEach(element => {
        element.addEventListener("mouseover", (e) => {
            let opacity = parseFloat(window.getComputedStyle(e.target).getPropertyValue("opacity"));
            console.log(opacity);
            e.target.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
            e.target.style.opacity = Math.min(opacity + .1, 1).toString();
            console.log(opacity);
    })});
}

make_board(5, 5);