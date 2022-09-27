const keyboardButton = document.getElementsByClassName('keyboard-button')
let userEntry = []
let colNum = 0
let rowNum = 0
function keyboardClick(event) { //function for onscreen keyboard
    const clickedKey = event.target
    console.log(clickedKey)
    const keyPressed = clickedKey.dataset.key
    console.log(keyPressed)
    const rowEntry = document.getElementsByClassName('c'+colNum)
    if (colNum <= 5 && keyPressed !== 'backspace' && keyPressed !== 'enter') {
        rowEntry[rowNum].innerText = keyPressed
        colNum++
        userEntry.push(keyPressed)
        console.log(userEntry)
        console.log(colNum)
    }if (keyPressed === 'backspace' && colNum >= 0) {
        colNum--
        userEntry.pop()
        console.log(userEntry)
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

function keyboardPress(keyPress) { //function for physical keyboard
    const rowEntry = document.getElementsByClassName('c'+colNum)
    if (colNum <= 5 && keyPress !== 'Backspace' && keyPress !== 'Enter') { // need to work out how to ignore everything that isnt a letter or backspace and enter
        rowEntry[rowNum].innerText = keyPress
        colNum++
        userEntry.push(keyPress)
        console.log(userEntry)
        console.log(colNum)
    }if (keyPress === 'Backspace' && colNum >= 0) {
        colNum--
        userEntry.pop()
        console.log(userEntry)
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