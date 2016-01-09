//Display Question on Webpage
var display1 = document.getElementById('r1');
var score1 = document.getElementById('s1');
var score2 = document.getElementById('s2');
var display2 = document.getElementById('r2');
var score3 = document.getElementById('s3');
var display3 = document.getElementById('r3');
var score4 = document.getElementById('s4');
var display4 = document.getElementById('r4');
var display5 = document.getElementById('r5');
var display6 = document.getElementById('r6');

// //Find out their name//
var userName = prompt('What is your name?');
console.log("The user\'s name is " +userName+ ".");

//Are they ready to play?//
var ready = prompt("Hello "+ userName + "! Are you ready to begin the KAT QUIZ? Please answer Y or N");
  if (ready.toUpperCase() === "N" || ready.toUpperCase() === "NO"
    || ready.toUpperCase() === "NAH" || ready.toUpperCase() === "NOPE") {
    alert("I\'m glad you recognize that you aren\'t ready. Study up on Kat and come back.");
    }
  else {
    alert("Okay " + userName + "! Let\'s begin!");

//Begin Quiz//
console.log(userName);
var counter = 0;
//Question One through Three in an Array//
var aboutKat = [
  ['Does Kat love pumpkins more than pumpkin spice lattes? Please answer Yes or No.','YES', 'Y', 'YEA', 'YEAH','Correct ' + userName + ' ! Pumpkins themselves are far superior in Kat\'s eyes.','Bullocks ' + userName + '. You should be ashamed of yourself.',display1, score1],
  ['Is Kat a Canadian Citizen. Yes or No?','YES', 'Y', 'YEA', 'YEAH','Right you are' + userName + '! Kat loves Nanimo Bars.','HEY! ' + userName + '! You shouldn\'t judge a book by its cover!',display2, score2],
  ['Is Kat an American Citizen. Yes or No?','YES', 'Y', 'YEA', 'YEAH','Right you are ' + userName + '! Kat loves eagles. Yum.','...' + userName + ', please don\'t tell Donald Trump... JUST KIDDING! Trump can suck it. Kat\'s American.',display3, score3]]

//function
function firstThree(){
  var answer1 = prompt(aboutKat[i][0]);
  if (answer1.toUpperCase() === aboutKat[i][1] || answer1.toUpperCase() === aboutKat[i][2] || answer1.toUpperCase() === aboutKat[i][3] || answer1.toUpperCase() === aboutKat[i][4]){
    aboutKat[i][7].textContent = aboutKat[i][5];
    aboutKat[i][7].className = 'right';
    counter += 1;
    aboutKat[i][8].textContent = 'You now have ' + counter + '/5 answers correct.';
    }
    else {
      aboutKat[i][7].textContent = aboutKat[i][6];
      aboutKat[i][7].className = 'wrong';
      aboutKat[i][8].textContent = 'You now have ' + counter + '/5 answers correct.';
    }
}

for (var i = 0; i < aboutKat.length; i++) {
  firstThree();
  }

question4();
question5();


function question4() {
var answer4 = prompt("How many countries is Kat a citizen of?");
if (parseInt(answer4) === 3 || answer4 === "3" || answer4.toUpperCase() === "THREE") {
  display4.textContent = "Yes " + userName + "! USA, CANADA and UK!";
  counter += 1;
  score4.textContent = "You now have " +counter + "/5 answers correct.";
  display4.className = 'right'
  }
else if (parseInt(answer4) < 3 || answer4 === "2" || answer4 === "1"
        || answer4.toUpperCase() === "ONE" || answer4.toUpperCase() === "TWO") {
  display4.textContent = "Too low, " + userName + ". The correct answer is 3. USA, CANADA and UK!";
  display4.className = 'wrong'
  score4.textContent = "You now have " +counter + "/5 answers correct.";
  }
else if (parseInt(answer4) > 3) {
  display4.textContent = "Too high, " + userName + ". The correct answer is 3. USA, CANADA and UK!";
  display4.className = "wrong"
  score4.textContent = "You now have " +counter + "/5 answers correct.";
  }
else {
  display4.textContent = "Hm... I'm not sure you understood the question " + userName + ". Anyway... moving on.";
  display4.className = "wrong"
  score4.textContent = "You now have " +counter + "/5 answers correct.";
  }
}
//Question Five//
function question5() {
var teeth = false;
while (teeth === false){
  var answer5 = prompt("Last question, " + userName + "! Many teeth has Kat had pulled? Please answer with an integer.");
  if (parseInt(answer5) === 19) {
  teeth = true;
  counter += 1;
  display5.textContent = "Correct! Your final score is " + counter + "/5!" +userName +"!";
  display5.className = "right"
  }
  else if (parseInt(answer5) < 19) {
    alert("Too low!");
    teeth = false;
    display5.className = "wrong";
  }
  else {
    alert("Too high! I am not a shark.");
    teeth = false
    display5.className = "wrong";
  }
  }
}
var counter2 = 0;
//Question Six//
var isCorrect = false;
var answer6 = prompt("BONUS QUESTION: Please state the first name of a main West Wing character");
var westWing = ["JOSH", "SAM", "CJ", "TOBY", "DONNA", "ABBY", "ZOE", "JOSIAH", "LEO", "CHARLIE", "WILL", "DANNY"];
//for loop
function question6() {
for (var i = 0; i < westWing.length; i++) {
  if (answer6.toUpperCase() == westWing[i]) {
    alert("Good Job!")
    display6.textContent = answer6 + " is from the West Wing!";
    display6.className = "right";
    isCorrect = true;
    counter1 =+ 5;
    alert('You got an additional' + counter1 + ' For a total point count of ' +(counter+counter2) + '!')
//  break;
    }
  }
if (isCorrect == false) {
  display6.textContent = 'WATCH THE WEST WING!';
  display6.className = "wrong";
}
}
question6();
}
