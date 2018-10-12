//Creating some variables//
//This is the variable that will track the user's score/crystals values//
var userScore = 0;

//Variable that will store the computer's choice of a random number//
var randomNum = 0;

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
console.log(Math.floor((Math.random () * 111 ) + 10));
console.log(Math.floor((Math.random () * 111 ) + 10));
console.log(Math.floor((Math.random () * 111 ) + 10));
console.log(Math.floor((Math.random () * 111 ) + 10));
console.log(Math.floor((Math.random () * 111 ) + 10));
$(document).ready (function () {
    
     var randomNum = Math.floor((Math.random () * 120) + 19);
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






if (userScore === randomNum) {
    alert ("You won!");
    wins++ ;
}

else if (userScore > randomNum) {
     alert ("You lost!");
    losses++;
}

function compareScore(){
    if(userScore === randomNum) {
        wins++;
        alert("You won");
        // Update ui
    } else if(userScore > randomNum){
        losses++;
        alert("You lost");
        // update Ui
    } else {
        // update ui
    }
}