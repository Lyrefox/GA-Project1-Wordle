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

function keyboardClick(event) { //function for onscreen keyboard
    const clickedKey = event.target
    // console.log(clickedKey)
    const keyPressed = clickedKey.dataset.key
    // console.log(keyPressed)
    const rowEntry = document.getElementById(rowNum + 'c' + colNum)
    // console.log(rowEntry)
    if (colNum <= 4 && keyPressed !== 'backspace' && keyPressed !== 'enter') {
        rowEntry.innerText = keyPressed
        colNum++
        userEntry.push(keyPressed)
        // console.log(userEntry)
        // console.log(colNum)
    } if (keyPressed === 'backspace' && colNum >= 0) {
        // console.log(colNum)
        // colNum--
        // console.log(colNum)
        // userEntry.pop()
        // rowEntry.innerText = ''

        const delKey = document.getElementById(rowNum + 'c' + (colNum - 1))
        delKey.innerText = ''
        colNum = colNum - 1
        userEntry.pop()


        if (colNum === -1) {
            colNum = 0
        }
        // console.log(colNum)
    } if (keyPressed === 'enter' && colNum === 5) {
        // let answerString = userEntry.join('').toUpperCase()
        // console.log(answerString)
        rowNum++
        colNum = 0
        // checkAnswer()
        checkWordExist()
        userEntry = []
    }
}

function keyboardPress(event) { //function for physical keyboard
    const keyPress = event.key;
    let keyPressCap = keyPress.toUpperCase()
    // let answerString = userEntry.join('').toUpperCase()
    const rowEntry = document.getElementById(rowNum + 'c' + colNum)
    if (colNum <= 4 && keyPress !== 'Backspace' && keyPress !== 'Enter') { // need to work out how to ignore everything that isnt a letter or backspace and enter
        rowEntry.innerText = keyPress
        colNum++

        // console.log(typeof(keyPressCap))
        userEntry.push(keyPressCap)
        console.log(userEntry)
        // console.log(userEntry)
        // console.log(colNum)
    } if (keyPress === 'Backspace' && colNum >= 0) {
        // colNum--
        // rowEntry.innerText = ''
        // userEntry.pop()

        const delKey = document.getElementById(rowNum + 'c' + (colNum - 1))
        delKey.innerText = ''
        colNum = colNum - 1
        userEntry.pop()


        if (colNum === -1) {
            colNum = 0
        }
        // console.log(colNum)
    } if (keyPress === 'Enter' && colNum === 5) {
        rowNum++
        colNum = 0
        // checkAnswer()
        checkWordExist()
        // const answer2 = userEntry.forEach(result => splitAnswer.includes(result))
        // console.log(answer2)
        userEntry = []
        // if (answerString === answerWord) {
        //     rowNum--
        //     document.getElementById('r'+rowNum).classList.add('class', 'green')
        //     alert('You Win')
        // }
        // userEntry = []
    }



}

// function checkAnswer() {
//     //splitAnswer - correct answer array tha has been split into letters
//     //userEntry - users answer array that is split into letters
//     // check if user answer includes in splitanswer, then check if index matches, color according to results
//     // const answer2 = userEntry.forEach(result)
//     // console.log(answer2)
//     for (let m = 0; m < userEntry.length; m++) {
//         console.log(m)
//         console.log(rowNum)
//         for (let b = 0; b < splitAnswer.length; b++) {
//             if (userEntry[m] == splitAnswer[b] && m === b) {
//                 console.log('true')
//                 const colorGreen = document.getElementById((rowNum - 1) + 'c' + m)
//                 colorGreen.classList.add('class', 'green')
//             }else if (userEntry[m] == splitAnswer[b]) {
//                 const colorYellow = document.getElementById((rowNum - 1) + 'c' + m)
//                 colorYellow.classList.add('class', 'yellow')
//             // }else if (!userEntry[m] == !splitAnswer[b]) {
//             //     const colorGrey = document.getElementById((rowNum - 1) + 'c' + m)
//             //     colorGrey.classList.add('class', 'grey')
//             }
//         }
//     }
// }

function checkWordExist() {
    let stringUser = userEntry.join('')
    console.log(stringUser)
    if (wordleArray.includes(stringUser.toLowerCase())) {
        checkAnswer()
    } else {
        alert('That is not a word')
        rowNum--
        colNum = 5
    }
}
function checkAnswer() {
    // const stringUser = userEntry.join('')
    //splitAnswer - correct answer array that has been split into letters
    //userEntry - users answer array that is split into letters
    // check if user answer includes in splitanswer, then check if index matches, color according to results
    // const count = {};
    // for (const element of splitAnswer) {
    //     if (count[element]) {
    //         count[element] += 1;
    //     } else {
    //         count[element] = 1;
    //     }
    // }
    // console.log(count)

    for (let arrayItem = 0; arrayItem < userEntry.length; arrayItem++) {
        // console.log('m in loop num = ' + arrayItem)
        // console.log('Row Number = ' + rowNum)
        // console.log('user Letter = ' + userEntry[arrayItem])
        // console.log('Correct word = ' + splitAnswer[arrayItem])
        // console.log(splitAnswer.indexOf(userEntry[arrayItem]))

        // looks into replacing items in array
        //or maybe popping it
        const squareSelect = document.getElementById((rowNum - 1) + 'c' + arrayItem)
        let character = squareSelect.textContent.toUpperCase()
        console.log(character)

        if (userEntry[arrayItem] === splitAnswer[arrayItem] && splitAnswer.indexOf(userEntry[arrayItem] === arrayItem)) {
            const colorGreen = document.getElementById((rowNum - 1) + 'c' + arrayItem)
            colorGreen.classList.add('class', 'green')

        } else if (answerWord.includes(character)) {
            // console.log('test')
            squareSelect.style.backgroundColor = 'yellow';

        } else {
            const colorGrey = document.getElementById((rowNum - 1) + 'c' + arrayItem)
            colorGrey.classList.add('class', 'grey')

        }
    }
    winLose()
    // const countAll = document.querySelectorAll('#r' + (rowNum - 1) + ' .green').length;
    // console.log(countAll)

}

function winLose() {
    const countAll = document.querySelectorAll('#r' + (rowNum - 1) + ' .green').length;
    // console.log(countAll)
    if (countAll === 5) {
        setTimeout(function () {
            alert('You Win!');
            location.reload()
        }, 0)


    } else if (rowNum === 6 && countAll < 5) {
        setTimeout(function () {
            alert('You Lose');
            location.reload()
        }, 0)

    }
}



// iterate through word and change color on the spot so i dont have to get element later
// turn answer word into single letter arary like user input is and compare them, then compare indexes if they match to determine if green of yellow
// if letter matches AND index matches, color green, if letter included but index does not match color grey, if neither match then color grey