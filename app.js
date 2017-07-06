/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer;

scores = [0,0];
roundScore = 0;
activePlayer = 0;

//generate random number
dice = Math.floor(Math.random() * 6) + 1;


//change CSS property with querySelector
document.querySelector(".dice").style.display = "none";

//set scores to 0
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

//event handlers
document.querySelector(".btn-roll").addEventListener("click", function() {
    // 1. Random number
    var dice = Math.floor(Math.random() * 6) + 1;

    // 2 . Display result
    var diceDOM = document.querySelector(".dice")
    diceDOM.style.display = "block";
    diceDOM.src = "dice-" + dice + ".png";

    // 3. Update round score IF the rolled number was NOT a 1
    if (dice !== 1) {
        //add score
        roundScore += dice;
        document.querySelector("#current-" + activePlayer).textContent = roundScore;
    } else {
        //next player
        activePlayer === 0 ? actiePlayer = 1 : activePlayer = 0; //ternary operator
        /* ^ is equivalent to
        if(activePlayer === 0) {
            activePlayer = 1;
        } else {
            activePlayer = 0
        }*/

        //set round score back to zero
        roundScore = 0;

        //set scores back to zero
        document.getElementById("current-0").textContent = "0";
        document.getElementById("current-0").textContent = "1";
        
        //add active class for current player
        document.querySelector(".player-0-panel").classList.toggle("active");
        document.querySelector(".player-1-panel").classList.toggle("active");

        //document.querySelector(".player-0-panel").classList.remove("active");
        //document.querySelector(".player-1-panel").classList.remove("active");

        document.querySelector("dice").style.display = "none";
    }
});




//document.querySelector("#current-" + activePlayer).textContent = dice;
//document.querySelector("#current-" + activePlayer).innerHTML = "<em>" + dice + "</em>";

//read from document
//var x = document.querySelector("#score-0").textContent;