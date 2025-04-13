function rollDice() {
    const diceImages = [
      "dice1.png",
      "dice2.png",
      "dice3.png",
      "dice4.png",
      "dice5.png",
      "dice6.png"
    ];
  
    var randomNumber1 = Math.floor(Math.random() * 6);  
    var randomDiceImage1 = diceImages[randomNumber1];  
    var randomImageSource1 = "images/" + randomDiceImage1;
    var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", randomImageSource1);
  
    var randomNumber2 = Math.floor(Math.random() * 6);  
    var randomDiceImage2 = diceImages[randomNumber2];  
    var randomImageSource2 = "images/" + randomDiceImage2;
    var image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src", randomImageSource2);
  
    var resultText = "";
    if (randomNumber1 > randomNumber2) {
      resultText = "Player 1 Wins!";
    } else if (randomNumber1 < randomNumber2) {
      resultText = "Player 2 Wins!";
    } else {
      resultText = "It's a Tie!";
    }
    document.getElementById("result").textContent = resultText;
  }
  