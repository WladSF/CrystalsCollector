//Creating some variables//
//This is the variable that will track the user's score/crystals values//
var userScore = 0;
//Variable that will store the computer's choice of a random number//
var randomNum;
var wins = 0;
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
    $("#targetNum").text("Random Number :" + " " + randomNum);
    $("#totalScore").text("Score :" + " " + userScore);
    console.log("randomNum", Math.floor(Math.random () * (120 - 19 + 1)) +19);
}

reset ();

function compareScore(){
    console.log(userScore);
    console.log(randomNum);
        if (userScore === randomNum) {
            wins++;
            alert("You won!");
            $("#totalWins").text("Wins :" + " " + wins);  // Update ui
            reset ();
        } 
        
        else if (userScore > randomNum){
            losses++;
            alert("You lost!");
            $("#totalLosses").text("Losses :" + " " + losses);  // Update ui
            reset ();
    
        }
    
    }
    
       $("#pic1").on("click", function() {
        userScore += crystal1;
        $("#totalScore").text("Score :" + " " + userScore);
        compareScore ();
        console.log("userScore", userScore);
       });  
       
       $("#pic2").on("click", function() {
           userScore += crystal2;
           $("#totalScore").text("Score :" + " " + userScore);
           compareScore ();
           console.log("userScore", userScore);
       });
          
       $("#pic3").on("click", function() {
           userScore += crystal3;
           $("#totalScore").text("Score :" + " " + userScore);
           compareScore ();
        //    console.log("userScore", userScore);
       });
        
       $("#pic4").on("click", function() {
           userScore += crystal4;
           $("#totalScore").text("Score :" + " " + userScore);
           compareScore ();
        //    console.log("userScore", userScore);
       });

});





