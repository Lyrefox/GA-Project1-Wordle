function renderBoard() {
    let board = document.getElementById("box");

    for (let i = 0; i < 6; i++) {
        let row = document.createElement("div")
        row.className = "box-row"
        
        for (let j = 0; j < 5; j++) {
            let column = document.createElement("div")
            column.className = "box-column"
            row.appendChild(column)
        }

        board.appendChild(row)
    }
}

renderBoard()