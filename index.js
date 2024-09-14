// Generate random numbers for both dice
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Create the file paths for the images
var randomDiceImage1 = "dice" + randomNumber1 + ".png"; // e.g., dice1.png to dice6.png
var randomDiceImage2 = "dice" + randomNumber2 + ".png"; // e.g., dice1.png to dice6.png

// Create the image sources
var source1 = "images/" + randomDiceImage1;
var source2 = "images/" + randomDiceImage2;

// Update the images for both dice
var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src", source1);
image2.setAttribute("src", source2);

// Update the title to show the winner
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}
    