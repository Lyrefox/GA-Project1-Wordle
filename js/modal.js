const keyboardButton = document.getElementsByClassName('keyboard-button')
let colNum = 0

function keyboardClick(event) {
    const clickedKey = event.target
    console.log(clickedKey)
    const keyPressed = clickedKey.dataset.key
    console.log(keyPressed)
    const rowEntry = document.getElementsByClassName('c'+colNum)
    if (colNum < 5) {
        rowEntry[0].innerText = keyPressed
        colNum2 = colNum++
        console.log(colNum)
    }if (keyPressed === 'backspace') {
        colNum--
        rowEntry[0].InnerText = ''
        console.log(colNum)
    }
    
    
    
    
}