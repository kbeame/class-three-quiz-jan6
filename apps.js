//Find out their name//
var userName = prompt('What is your name?');
console.log("The user\'s name is " +userName+ ".");

//Are they ready to play?//
var ready = prompt("Hello "+ userName + "! Are you ready to begin the KAT QUIZ? Yes or No");
  if (ready.toUpperCase() !== "YES") {
    alert("I\'m glad you recognize that you aren\'t ready. Study up on Kat and come back.");
    }
  else {
    alert("Okay " + userName + "! Let\'s begin!");

//Begin Quiz//
console.log(userName);
//Question One//
var answer1 = prompt("Does Kat love pumpkins or pumpkin spice lattes?");
  if (answer1.toUpperCase() === "PUMPKINS") {
    alert("Correct " + userName + "! Pumpkins themselves are far superior in Kat\'s eyes.");
    }
  else {
    alert("Bullocks " + userName + ". You should be ashamed of yourself.");
      }
//Question Two//
var answer2 = prompt("Is Kat a Canadian Citizen. Yes or No?");
  if (answer2.toUpperCase() === "YES") {
    alert("Right you are " + userName + "! Kat loves Nanimo Bars.");
      }
  else {
    alert("HEY! " + userName + "! You shouldn\'t judge a book by its cover!");
      }
//Question Three//
var answer3 = prompt("Is Kat an American Citizen. Yes or No?");
  if (answer3.toUpperCase() === "YES") {
    alert("Right you are " + userName + "! Kat loves eagles. Yum.");
    }
  else {
    alert("..." + userName + ", please don\'t tell Donald Trump... JUST KIDDING! Trump can suck it. Kat\'s American.");
      }
//Question Four//

var answer4 = prompt("How many countries is Kat a citizen of?");
  if (parseInt(answer4) === 3) {
    alert("Yes " + userName + "! USA, CANADA and UK!");
    }
  else if (parseInt(answer4) > 3) {
    alert("Too high, " + userName + ".");
    }
  else {
    alert("Too low, " + userName + ".");
    }

}
