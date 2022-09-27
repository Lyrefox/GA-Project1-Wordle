for (key of keyboardButton) {
    key.addEventListener('click', keyboardClick)
}
document.addEventListener('keypress', (event) => {
    const keyPress = event.key;
    // keyboardClick(keyPress)
    console.log(keyPress)
})
