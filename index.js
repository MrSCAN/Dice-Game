function rollDice() {
    var diceOne = Math.ceil(Math.random() * 6);
    var diceTwo = Math.ceil(Math.random() * 6);
    document.querySelector(".img1").setAttribute("src", "images/dice" + diceOne + ".png");
    document.querySelector(".img2").setAttribute("src", "images/dice" + diceTwo + ".png");
    if (diceOne > diceTwo) {
        document.querySelector("#winText").innerHTML = "<h1>🚩Player 1 Wins!</h1>"
    } else if (diceOne < diceTwo) {
        document.querySelector("#winText").innerHTML = "<h1></i>Player 2 Wins!🚩</h1>"
    } else {
        document.querySelector("#winText").innerHTML = "<h1>Draw</h1>"
    }

}

document.getElementById('diceButton').addEventListener("click", rollDice);