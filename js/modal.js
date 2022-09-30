const keyboardButton = document.getElementsByClassName('keyboard-button')
let answerArray = []
const randomIndex = Math.floor(Math.random() * wordleArray.length);
let answerWord = wordleArray[randomIndex];
answerWord = answerWord.toUpperCase()
const splitAnswer = answerWord.split('')
answerArray.push(answerWord)
console.log(answerArray)
console.log(splitAnswer)

let userEntry = []
let colNum = 0
let rowNum = 0

var winSound = new Audio('../sound/HappySoundEffect.mp3');
var loseSound = new Audio('../sound/SadViolin.mp3');

function keyboardClick(event) { //function for onscreen keyboard
    const clickedKey = event.target
    const keyPressed = clickedKey.dataset.key
    const rowEntry = document.getElementById(rowNum + 'c' + colNum)
    if (colNum <= 4 && keyPressed !== 'backspace' && keyPressed !== 'enter') {
        rowEntry.innerText = keyPressed
        colNum++
        userEntry.push(keyPressed)
    } if (keyPressed === 'backspace' && colNum >= 0) {

        const delKey = document.getElementById(rowNum + 'c' + (colNum - 1))
        delKey.innerText = ''
        colNum = colNum - 1
        userEntry.pop()


        if (colNum === -1) {
            colNum = 0
        }
    } if (keyPressed === 'enter' && colNum === 5) {
        rowNum++
        colNum = 0
        checkWordExist()
        userEntry = []
    }
}

function keyboardPress(event) { //function for physical keyboard
    const keyPress = event.key;
    let keyPressCap = keyPress.toUpperCase()
    const rowEntry = document.getElementById(rowNum + 'c' + colNum)
    if (colNum <= 4 && keyPress !== 'Backspace' && keyPress !== 'Enter') {
        rowEntry.innerText = keyPress
        colNum++


        userEntry.push(keyPressCap)
        console.log(userEntry)
    } if (keyPress === 'Backspace' && colNum >= 0) {

        const delKey = document.getElementById(rowNum + 'c' + (colNum - 1))
        delKey.innerText = ''
        colNum = colNum - 1
        userEntry.pop()


        if (colNum === -1) {
            colNum = 0
        }
    } if (keyPress === 'Enter' && colNum === 5) {
        rowNum++
        colNum = 0
        checkWordExist()
        userEntry = []

    }



}

function checkWordExist() {
    let stringUser = userEntry.join('')
    if (wordleArray.includes(stringUser.toUpperCase())) {
        checkAnswer()
    } else {
        alert('That is not a word')
        rowNum--
        colNum = 5
    }
}
var countDupe = {}
var countDupeUser = {}
function checkAnswer() {
    for (var arrayItem = 0; arrayItem < userEntry.length; arrayItem++) {
        var userLetter = userEntry[arrayItem]
        if (userEntry[arrayItem] === splitAnswer[arrayItem] && splitAnswer.indexOf(userEntry[arrayItem] === arrayItem)) {
            const colorGreen = document.getElementById((rowNum - 1) + 'c' + arrayItem)
            colorGreen.classList.add('class', 'green')
            const keyGreen = document.getElementById(userEntry[arrayItem])
            keyGreen.classList.remove('class', 'green')
            keyGreen.classList.remove('class', 'yellow')
            keyGreen.classList.add('class', 'green')

        } else if (splitAnswer.includes(userEntry[arrayItem])) {
            const colorYellow = document.getElementById((rowNum - 1) + 'c' + arrayItem)
            colorYellow.classList.add('class', 'yellow')
            const keyYellow = document.getElementById(userEntry[arrayItem])
            keyYellow.classList.remove('class', 'yellow')
            keyYellow.classList.add('class', 'yellow')
        } else {
            const colorGrey = document.getElementById((rowNum - 1) + 'c' + arrayItem)
            colorGrey.classList.add('class', 'grey')
            const keyGrey = document.getElementById(userEntry[arrayItem])
            keyGrey.classList.add('class', 'grey')

        }
    }
    winLose()
}

function winLose() {
    
    const countAll = document.querySelectorAll('#r' + (rowNum - 1) + ' .green').length;
    if (countAll === 5) {
        const win = document.getElementById('h1')
        win.innerHTML = "You Win!"
        window.removeEventListener('keyup', keyboardPress)
        document.getElementById('Keyboard').style.display = "none";
        // document.getElementById('box').style.display = "none";
        document.getElementById('endgame').style.display = "flex";
        winSound.play();
    } else if (rowNum === 6 && countAll < 5) {
        const win = document.getElementById('h1')
        win.innerHTML = "You Lose!"
        window.removeEventListener('keyup', keyboardPress)
        document.getElementById('Keyboard').style.display = "none";
        document.getElementById('endgame').style.display = "flex";
        loseSound.play();
    }
}

function tryAgainButton() {
    location.reload()
}