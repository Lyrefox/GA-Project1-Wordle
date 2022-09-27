for (key of keyboardButton) {
    key.addEventListener('click', keyboardClick)
}
// window.addEventListener('keyup', (event) => {
//     const keyPress = event.key;
//     keyboardPress(keyPress)
//     // console.log(keyPress)
// })
window.addEventListener('keyup', keyboardPress)
