# Dice Game 🎲

A simple web-based dice game where two players roll a pair of dice to see who wins. Each time the page is refreshed, the dice are rolled, and the player with the higher number wins. If both players roll the same number, it's a draw!

## Features

- Two-player dice game
- Random dice rolls on each page refresh
- Displays which player wins or if it's a draw
- Fun and easy to play with a simple user interface

## How to Play

1. Open the `dicee.html` file in your browser.
2. The page will automatically refresh and roll two dice.
3. The result will display the winner:
   - "Player 1 Wins!" if the first die has a higher number.
   - "Player 2 Wins!" if the second die has a higher number.
   - "Draw!" if both dice show the same number.

## How It Works

- The dice rolls are generated using JavaScript's `Math.random()` function to simulate rolling a die.
- Each die can land on a number between 1 and 6.
- The dice images are updated dynamically to reflect the outcome of the roll.
- The winner is determined by comparing the two numbers rolled.

## Setup

To set up and run the project locally:

1. Clone the repository:
    ```bash
    git clone https://github.com/irfan38431/dice-game.git
    ```
2. Navigate into the project directory:
    ```bash
    cd dice-game
    ```
3. Open `dicee.html` in your preferred web browser to play the game.

## File Structure

- **index.html**: The main HTML file containing the structure of the game.
- **styles.css**: CSS file for styling the game.
- **index.js**: JavaScript file containing the game logic.
- **images/**: Folder containing dice images (`dice1.png` to `dice6.png`).

## Technologies Used

- HTML
- CSS
- JavaScript

## License

This project is open-source and available under the [MIT License](LICENSE).

## Author

[I Irfan Ahmed](https://github.com/irfan38431)

Feel free to contribute to this project by opening issues or creating pull requests. Enjoy the game!
