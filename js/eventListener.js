for (key of keyboardButton) {
    var keyEvent = key.addEventListener('click', keyboardClick)
}

window.addEventListener('keyup', keyboardPress)
tryAgain.addEventListener('click', tryAgainButton)
