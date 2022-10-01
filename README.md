# GA-Project1-Wordle

Wordle for GA Project1
- [Here is my Wordle Game!](https://lyrefox.github.io/GA-Project1-Wordle/html/)

## Rules
- You have to guess the Wordle in six goes or less
- A correct letter turns green
- A correct letter in the wrong place turns yellow
- An incorrect letter turns gray
- Letters can be used more than once
- Answers are never plurals

## Work Plan
- [✅] Create HTML
    - Create Initial HTML
    - created h1, divs for game-board and keyboard
    - created each button for the keyboard
- [✅] Create CSS
    - style background
        - added background to game
        - fixed positionioning
        - fixed background not showing on entire screen when keyboard is removed on win/lose screen
    - Header
        - centered text
        - changed font
    - game board
        - change display to flex and centerd the entire element
        - centered text, and increased font size
        - removed border
        - gave each tile a shadow
        - change font
        - added text shadow
        - changed text and shadow color
        - changed color after tile background color changed
    - on-screen keyboard
        - changed size of buttons
        - curved borders to look more curved like type writer keys
        - changed background color and opacity
        - changed font of letters on buttons
        - added hover effect to change background color of keys
        - added active effect to make keys look like they have been pressed
        - changed hover from background color to border
    - win/lose screen
        - changed h1 element to display You Win/You Lose!
        - centered h2 and to match css of h1 while being slightly smaller
        - added hover effect to try again button
        - added active effect to try again button
- [✅] js
    - create game board using for loop
    - create event listeners for on-screen buttons and physical keyboard
    - show entered key into game board.
    - code initial backspace function, 70% working
    - code enter functionality
    - enter now checks if valid word
    - started function to change tile colors
    - added function to capture physical keyboard inputs
    - created funtion that checks each letter in the game board and compares to the correct word
    - completed backspace so it is fully functional
    - added win and lose conditions
    - completed tile color function so each tile colors correctly
    - changed win screen from alert to change h1 to say you win/you lose.
    - removed event listener for physical keyboard after win/lose
    - hide on-screen keyboard on win/lose
    - added try again button on win/lose screen
    - added win and lose sounds
    - added h2 element to display what the correct word was after you lose


- Unsolved problems - Everything works but I was not able to figure out how to remove duplicate yellows when there is no duplicate in the correct word.