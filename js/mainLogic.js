const keyboardButton = document.getElementsByClassName('keyboard-button')
const randomIndex = Math.floor(Math.random() * wordleArray.length);

let answerWord = wordleArray[randomIndex];
answerWord = answerWord.toUpperCase()
const splitAnswer = answerWord.split('')
console.log(answerWord)

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
    }
}

function keyboardPress(event) { //function for physical keyboard
    const keyPress = event.key;
    let keyPressCap = keyPress.toUpperCase()
    const rowEntry = document.getElementById(rowNum + 'c' + colNum)
    if (colNum <= 4 && keyPress !== 'Backspace' && keyPress !== 'Enter' && keyPress >= 'a' && keyPress <= 'z') {
        rowEntry.innerText = keyPress
        colNum++


        userEntry.push(keyPressCap)
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

    }



}

function checkWordExist() {
    let stringUser = userEntry.join('')
    if (wordleArray.includes(stringUser.toUpperCase())) {
        checkAnswer()
        userEntry = []
    } else {
        alert('That is not a word')
        rowNum--
        colNum = 5
    }
}
function checkAnswer() {
    for (var arrayItem = 0; arrayItem < userEntry.length; arrayItem++) {
        if (userEntry[arrayItem] === splitAnswer[arrayItem] && splitAnswer.indexOf(userEntry[arrayItem] === arrayItem)) {
            const colorGreen = document.getElementById((rowNum - 1) + 'c' + arrayItem)
            colorGreen.classList.add('class', 'green')
            const keyGreen = document.getElementById(userEntry[arrayItem])
            keyGreen.classList.remove('class', 'green')
            keyGreen.classList.remove('class', 'yellow')
            keyGreen.classList.add('class', 'green')
            // flipTile(colorGreen, "green")

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
        document.getElementById('endgame').style.display = "flex";
        winSound.play();
    } else if (rowNum === 6 && countAll < 5) {
        const win = document.getElementById('h1')
        const answerWas = document.getElementById('correctWord')
        win.innerHTML = "You Lose!"
        answerWas.innerHTML = "The word was " + answerWord
        window.removeEventListener('keyup', keyboardPress)
        document.getElementById('correctWord').style.display = 'block'
        document.getElementById('Keyboard').style.display = "none";
        document.getElementById('endgame').style.display = "flex";
        loseSound.play();
    }
}

function tryAgainButton() {
    location.reload()
}

function flipTile(tile, color) {
    tile.style.transition = "0.3s ease-in"
    tile.style.transform = "rotateX(90deg)"
    setTimeout(()=> {
        tile.style.transform = "rotateX(0deg)"
        tile.style.backgroundColor = color

    }, 300)
}
