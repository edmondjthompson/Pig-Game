/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer;

newGame();

// Generate random number
dice = Math.floor(Math.random() * 6) + 1;


// Change CSS property with querySelector
document.querySelector(".dice").style.display = "none";

// Set scores to 0
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

//event handlers
document.querySelector(".btn-roll").addEventListener("click", function () {
    // 1. Random number
    var dice = Math.floor(Math.random() * 6) + 1;

    // 2 . Display result
    var diceDOM = document.querySelector(".dice")
    diceDOM.style.display = "block";
    diceDOM.src = "dice-" + dice + ".png";

    // 3. Update round score IF the rolled number was NOT a 1
    if (dice !== 1) {
        // Add score
        roundScore += dice;
        document.querySelector("#current-" + activePlayer).textContent = roundScore;
    } else {
        // Next player
        nextPlayer();
    }
});

//HOLD function 
document.querySelector(".btn-hold").addEventListener("click", function () {

    // Add CURRENT score to global score
    scores[activePlayer] += roundScore;

    // Update UI
    document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer]

    // Check IF player won the game
    if (scores[activePlayer] >= 100) {
        document.querySelector("#name-" + activePlayer).textContent = "Winner!";
        document.querySelector(".dice").style.display = "none";

        // Styles the panel of the winnng player with class from CSS
        document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
        document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
    } else {
        // Next player
        nextPlayer();
    }
});

// Creates nextPlayer function to maintain simplicity of code (DRY principle)
function nextPlayer() {
    //Next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0 //ternary operator
    /* ^ is equivalent to
    if(activePlayer === 0) {
        activePlayer = 1;
    } else {
        activePlayer = 0
    }*/

    // Set round score back to zero
    roundScore = 0;

    // Set scores back to zero
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";

    // Add active class for current player (shows current player in italics)
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

    document.querySelector(".dice").style.display = "none";
};

// Initialize New game
document.querySelector(".btn-new").addEventListener("click", newGame);


//Creates a function that sets the rules when a new game is started that 1. Resets all scores to 0 and 2. Resets all on-screen
function newGame() {
    scores = [0, 0]; // Sets scores to 0
    activePlayer = 0; // Set activePlayer score to 0
    roundScore = 0; // Set roundScore back to 0

    // Change CSS property with querySelector (hide dice)
    document.querySelector(".dice").style.display = "none";

    // Set scores on-screen to 0
    document.getElementById("score-0").textContent = "0";
    document.getElementById("score-1").textContent = "0";
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";

    //Reset text
    document.getElementById("name-0").textContent = "Player 1!";
    document.getElementById("name-1").textContent = "Player 2!";
    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");
    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");

    document.querySelector(".player-0-panel").classList.add("active");
}