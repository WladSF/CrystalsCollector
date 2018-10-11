//Creating some variables//
//This is the variable that will track the user's score/crystals values//
var userScore = 0;

//Variable that will store the computer's choice of a random number//
var randomNum = [];

//Variable for when the user wins//
var wins = 0;

//Variable for when the user loses//
var losses = 0;

//Variables for each crystal to obtain a random number between 1 and 12//
var crystal1 = Math.floor(Math.random () * 12 + 1);
var crystal2 = Math.floor(Math.random () * 12 + 1);
var crystal3 = Math.floor(Math.random () * 12 + 1);
var crystal4 = Math.floor(Math.random () * 12 + 1);

//Once HTML has loaded, run jQuery / JS
$(document).ready (function () {

    var randomNum = Math.floor((Math.random () * 120) + 19);
}
var userScore = 0;


$("#pic1").on("click", function() {
 userScore += crystal1;
}


$("#pic2").on("click", function() {
    userScore += crystal2;
   }


$("#pic3").on("click", function() {
    userScore += crystal3;
   }


$("#pic4").on("click", function() {
    userScore += crystal4;
   }



if (userScore === randomNum {
    alert ("You won!");
    wins++ ;
})

else if (userScore > randomNum) {
     alert ("You lost!");
    losses++;
}