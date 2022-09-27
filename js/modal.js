const keyboardButton = document.getElementsByClassName('keyboard-button')
let answerArray = []
const randomIndex = Math.floor(Math.random() * validWords.length);
const answerWord = validWords[randomIndex];
answerArray.push(answerWord)
console.log(answerArray)

let userEntry = []
let colNum = 0
let rowNum = 0

function keyboardClick(event) { //function for onscreen keyboard
    const clickedKey = event.target
    console.log(clickedKey)
    const keyPressed = clickedKey.dataset.key
    console.log(keyPressed)
    const rowEntry = document.getElementsByClassName(rowNum + 'c' + colNum)
    if (colNum <= 5 && keyPressed !== 'backspace' && keyPressed !== 'enter') {
        rowEntry.innerText = keyPressed
        colNum++
        userEntry.push(keyPressed)
        console.log(userEntry)
        console.log(colNum)
    } if (keyPressed === 'backspace' && colNum >= 0) {
        colNum--
        userEntry.pop()
        console.log(userEntry)
        // console.log(colNum)
        rowEntry[rowNum].innerText = ''
        if (colNum === -1) {
            colNum = 0
        }
        console.log(colNum)
    } if (keyPressed === 'enter' && colNum === 5) {
        let answerString = userEntry.join('').toUpperCase()
        console.log(answerString)
        rowNum++
        colNum = 0
    }
}

function keyboardPress(keyPress) { //function for physical keyboard
    let answerString = userEntry.join('').toUpperCase()
    const rowEntry = document.getElementsByClassName('c' + colNum)
    if (colNum <= 5 && keyPress !== 'Backspace' && keyPress !== 'Enter') { // need to work out how to ignore everything that isnt a letter or backspace and enter
        rowEntry[rowNum].innerText = keyPress
        colNum++
        userEntry.push(keyPress)
        console.log(userEntry)
        console.log(colNum)
    } if (keyPress === 'Backspace' && colNum >= 0) {
        colNum--
        userEntry.pop()
        console.log(userEntry)
        // console.log(colNum)
        rowEntry[rowNum].innerText = ''
        if (colNum === -1) {
            colNum = 0
        }
        console.log(colNum)
    } if (keyPress === 'Enter' && colNum === 5) {
        rowNum++
        colNum = 0
        userEntry = []
        if (answerString === answerWord) {
            alert('You Win')
            const winner = document.getElementsByClassName('r' + rowNum)
            winner.clas
        }
    userEntry = []
    }
    


}



// iterate through word and change color on the spot so i dont have to get element later