
function renderBoard() {
    let board = document.getElementById("box");

    for (let i = 0; i <= 5; i++) {
        let row = document.createElement("div")
        row.className = "box-row"
        row.classList.add('r'+i)
        
        for (let j = 0; j <= 4; j++) {
            let column = document.createElement("div")
            column.className = "box-column"
            column.classList.add('c'+j)

            row.appendChild(column)
        }

        board.appendChild(row)
    }
}

renderBoard()

