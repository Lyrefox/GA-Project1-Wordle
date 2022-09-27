const keyboardButton = document.getElementsByClassName('keyboard-button')
let colNum = 0
let rowNum = 0
function keyboardClick(event) {
    const clickedKey = event.target
    console.log(typeof(clickedKey))
    const keyPressed = clickedKey.dataset.key
    console.log(keyPressed)
    const rowEntry = document.getElementsByClassName('c'+colNum)
    if (colNum <= 5 && keyPressed !== 'backspace' && keyPressed !== 'enter') {
        rowEntry[rowNum].innerText = keyPressed
        colNum2 = colNum++
        console.log(colNum)
    }if (keyPressed === 'backspace' && colNum >= 0) {
        rowEntry[rowNum].innerText = ''
        colNum2 = colNum--
        console.log(colNum)
    }if (keyPressed === 'enter' && colNum === 5) {
        rowNum++
        colNum = 0
    }
    
    
    
    
}