const keyboardButton = document.getElementsByClassName('keyboard-button')
let colNum = 0
let rowNum = 0
function keyboardClick(event) {
    const clickedKey = event.target
    console.log(clickedKey)
    const keyPressed = clickedKey.dataset.key
    console.log(keyPressed)
    const rowEntry = document.getElementsByClassName('c'+colNum)
    if (colNum <= 5 && keyPressed !== 'backspace' && keyPressed !== 'enter') {
        rowEntry[rowNum].innerText = keyPressed
        colNum++
        console.log(colNum)
    }if (keyPressed === 'backspace' && colNum >= 0) {
        colNum--
        // console.log(colNum)
        rowEntry[rowNum].innerText = ''
        if (colNum === -1) {
            colNum = 0
        }
        console.log(colNum)
    }if (keyPressed === 'enter' && colNum === 5) {
        rowNum++
        colNum = 0
    }
}

function keyboardPress(keyPress) {
    const rowEntry = document.getElementsByClassName('c'+colNum)
    if (colNum <= 5 && keyPress !== 'Backspace' && keyPress !== 'Enter') { // need to work out how to ignore everything that isnt a letter or backspace and enter
        rowEntry[rowNum].innerText = keyPress
        colNum++
        console.log(colNum)
    }if (keyPress === 'Backspace' && colNum >= 0) {
        colNum--
        // console.log(colNum)
        rowEntry[rowNum].innerText = ''
        if (colNum === -1) {
            colNum = 0
        }
        console.log(colNum)
    }if (keyPress === 'Enter' && colNum === 5) {
        rowNum++
        colNum = 0
    }
}