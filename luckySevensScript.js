/*  Name: Kevin Key
    Date Created: 1/7/19
    Last Edit: 1/12/19 */

// My function for the game.
function playGame(button) {

// Established a few variables that I knew I would need to get started.
var sumDie;
var diceOne;
var diceTwo;
var maxWon;
var indexMaxWon;
var totalRolls;
var description;
var myData;
var table;
var i;

// Ensured that value entered into input was seen as a number with the
// Number function.
var startingBet = Number(document.getElementById("startingBet").value);

// I used the toFixed method to make sure if the player uses a value with
// any numbers beyond the hundredths position, it would be rounded (not
// with this method, but later) to just two decimals.
startingBet = startingBet.toFixed(2);

// I used a different variable to keep track of how much money was had at
// any point in time.
var currentMoney = Number(document.getElementById("startingBet").value);

// Established an array to push currentMoney into.
var array = [];

   // Validation that the user input is a number and > 0.
   if(startingBet <= 0 || Number.isNaN(currentMoney)) {
      alert("Please enter a number value greater than 0 with no special characters. You CAN include one decimal point (.) in the appropriate place.");
   }

   else {

      // Nested my do/while function in if else so that the program
      // would not run if the initial conditions weren't met.
      do {

         // Dice roll operation.
         diceOne = Math.floor(Math.random() * 6 + 1);
         diceTwo = Math.floor(Math.random() * 6 + 1);
         sumDie = diceOne + diceTwo;

         if(sumDie == 7 && currentMoney > 0) {
            currentMoney += 4;
            array.push(currentMoney);
         }

         else {
            currentMoney--;
            array.push(currentMoney);
         }

         // Obtaining the max value within the array.
         maxWon = Math.max(...array);

         if(maxWon > 0) {

            // Again, used toFixed to make sure the maxWon value
            // only has two decimal places.
            maxWon = maxWon.toFixed(2);
         }

         else {

            // I had to use this if else so that if the user
            // starts with < $.50, the maxWon would not return a
            // negative value.
            maxWon = 0;
         }

         // Found the index of the maxWon.
         indexMaxWon = array.indexOf(Math.max(...array)) + 1;
         totalRolls = array.length;
         description = ["Starting Bet", "Total Rolls Before Going Broke", "Highest Amount Held/Won", "Roll Count at Highest Amount Won"];
         myData = ["$ " + startingBet, totalRolls+" roll(s)", "$ "+ maxWon, indexMaxWon + " roll(s)"];
         table = "<table class='table table-striped'><tbody>";

         for(i = 0; i < description.length; i++) {
            table += "<tr><td>"+ description[i] +"</td>";
            table += "<td>"+ myData[i] +"</td></tr>";
         }

         table += "</tbody></table>";

         // Changed the button from Play to Play Again.
         document.getElementById("btn").innerHTML = "Play Again";

         // Inserted the table.
         document.getElementById("myTable").innerHTML = "<hr /><h2>Results</h2>"+table;
      }
      while(currentMoney > 0);

   }
}

