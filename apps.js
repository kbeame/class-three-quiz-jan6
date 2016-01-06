//Find out their name//
var userName = prompt('What is your name?');
console.log("The user\'s name is " +userName+ ".");

//Are they ready to play?//
var ready = prompt("Hello "+ userName + "! Are you ready to begin the KAT QUIZ? Please answer Y or N");
  if (ready.toUpperCase() !== "Y") {
    alert("I\'m glad you recognize that you aren\'t ready. Study up on Kat and come back.");
    }
  else {
    alert("Okay " + userName + "! Let\'s begin!");

//Begin Quiz//
console.log(userName);
var counter = 0;
//Question One//
var answer1 = prompt("Does Kat love pumpkins more than pumpkin spice lattes? Please answer Yes or No.");
  if (answer1.toUpperCase() === "YES" || answer1.toUpperCase() === "Y"
  || answer1.toUpperCase() === "YEA" || answer1.toUpperCase() === "YEAH")
  {
    alert("Correct " + userName + "! Pumpkins themselves are far superior in Kat\'s eyes.");
    counter += 1;
    alert("You now have " +counter + "/5 answers correct.");
    }
  else {
    alert("Bullocks " + userName + ". You should be ashamed of yourself.");
    alert("You now have " +counter + "/5 answers correct.");
      }
//Question Two//
var answer2 = prompt("Is Kat a Canadian Citizen. Yes or No?");
  if (answer2.toUpperCase() === "YES" || answer2.toUpperCase() === "Y"
  || answer2.toUpperCase() === "YEA" || answer2.toUpperCase() === "YEAH") {
    alert("Right you are " + userName + "! Kat loves Nanimo Bars.");
    counter += 1;
    alert("You now have " +counter + "/5 answers correct.");
      }
  else {
    alert("HEY! " + userName + "! You shouldn\'t judge a book by its cover!");
    alert("You now have " +counter + "/5 answers correct.");
      }
//Question Three//
var answer3 = prompt("Is Kat an American Citizen. Yes or No?");
  if (answer3.toUpperCase() === "YES" || answer3.toUpperCase() === "Y" ||
      answer3.toUpperCase() === "YEA" || answer3.toUpperCase() === "YEAH") {
    alert("Right you are " + userName + "! Kat loves eagles. Yum.");
    counter += 1;
    alert("You now have " +counter + "/5 answers correct.");
    }
  else {
    alert("..." + userName + ", please don\'t tell Donald Trump... JUST KIDDING! Trump can suck it. Kat\'s American.");
    alert("You now have " +counter + "/5 answers correct.");
      }
//Question Four//

var answer4 = prompt("How many countries is Kat a citizen of?");
  if (parseInt(answer4) === 3 || answer4 === "3" || answer4.toUpperCase() === "THREE") {
    alert("Yes " + userName + "! USA, CANADA and UK!");
    counter += 1;
    alert("You now have " +counter + "/5 answers correct.");
    }
  else if (parseInt(answer4) < 3 || answer4 === "2" || answer4 === "1"
          || answer4.toUpperCase() === "ONE" || answer4.toUpperCase() === "TWO") {
    alert("Too low, " + userName + ". The correct answer is 3. USA, CANADA and UK!");
    alert("You now have " +counter + "/5 answers correct.");
    }
  else if (parseInt(answer4) > 3) {
    alert("Too high, " + userName + ". The correct answer is 3. USA, CANADA and UK!");
    alert("You now have " +counter + "/5 answers correct.");
    }
  else {
    alert("Hm... I'm not sure you understood the question " + userName + ". Anyway... moving on.");
    alert("You now have " +counter + "/5 answers correct.");
  }
//Question Five//
if (parseInt(answer5) !== 19) {
  while (parseInt(answer5) !== 19) {
    var answer5 = prompt("Last question, " + userName + "! Many teeth has Kat had pulled? Please answer with an integer.");
  }
  else {
    counter += 1;
    alert("You now have " +counter + "/5 answers correct.");
  }
}
