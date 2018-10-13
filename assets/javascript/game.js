//Creating some variables//
//This is the variable that will track the user's score/crystals values//
var userScore = 0;

//Variable that will store the computer's choice of a random number//
var randomNum;

//Variable for when the user wins//
var wins = 0;

//Variable for when the user loses//
var losses = 0;

//Variables for each crystal to obtain a random number between 1 and 12//
var crystal1 = Math.floor(Math.random () * 12 + 1);
var crystal2 = Math.floor(Math.random () * 12 + 1);
var crystal3 = Math.floor(Math.random () * 12 + 1);
var crystal4 = Math.floor(Math.random () * 12 + 1);
// console.log(Math.floor(Math.random () * 12 + 1));

//Once HTML has loaded, run jQuery / JS
$(document).ready (function () {

    //Function to reset the game//
function reset () {
    crystal1 = Math.floor(Math.random () * 12 + 1);
    crystal2 = Math.floor(Math.random () * 12 + 1);
    crystal3 = Math.floor(Math.random () * 12 + 1);
    crystal4 = Math.floor(Math.random () * 12 + 1);
    randomNum = Math.floor(Math.random () * (120 - 19 + 1)) +19;
    userScore = 0;
    $("#targetNum").text("randomNum");
    $("#totalScore").text("userScore");
//     console.log("randomNum", Math.floor(Math.random () * (120 - 19 + 1)) +19);
}

reset ();
    
     var randomNum = Math.floor(Math.random () * 120 - 19 + 1) +19;
     $("#pic1").on("click", function() {
        userScore += crystal1;
       console.log("userScore", userScore);
       });  
       
       $("#pic2").on("click", function() {
           userScore += crystal2;
           console.log("userScore", userScore);
       });
          
       $("#pic3").on("click", function() {
           userScore += crystal3;
           console.log("userScore", userScore);
       });
        
       $("#pic4").on("click", function() {
           userScore += crystal4;
           console.log("userScore", userScore);
       });
});

function compareScore(){

    if (userScore === randomNum) {
        wins++;
        alert("You won");
        $("#totalWins").html("Wins:" + wins) // Update ui
        reset ();

    } 
    
    else if (userScore > randomNum){
        losses++;
        alert("You lost");
        $("#totalLosses").text(losses) // update Ui
        reset ();

    } 
    
    else {
        // update ui
    }
}

