"use strict"
function rollDice(numberOfSides){
	let roll = Math.floor(Math.random() * numberOfSides) + 1;
	return roll;
} 

let currentScore = 0;
let count = 0;


function instructions(){
	alert("Horse Race"
	 + "\r\n" + "The Goal of this game is to cross the finish line (200 points) in the least number of turns."
	 + "\r" + "Before you start the race, you roll the 10 sided dice to find out where you will be racing, and then roll the 20 sided dice to name your horse."
	 + "\r\n" + "To begin the game, you roll a 4 sided dice. You must roll a 1 to leave the starting line."
	 + "\r" + "For every roll once you are past the starting line, you roll a 6, 8 and 12 sided dice."
     + "\r" + "Your score is increased by the total of the dice rolled, unless one of the following happens:"
     + "\r" + "Your score is increased by the total of the dice rolled, unless one of the following happens:"
     + "\r" + "- If the number rolled on all dice is the same, or if the sum of your roll is unlucky number 13, your horse goes back to the starting line, and a one must be rolled to re-enter the track.  "
     + "\r" + "- If the total of the dice rolled equals 20, you lose 20 points."
     + "\r" + "- If the total of the dice rolled equals 10, you lose 10 points. "
     + "\r" + "- If the total of the dice equals 26 (aka the maximum possible total), you lose 26 points."
     + "\r\n" + "Remember the number of turns it took your horse to cross the finish line and compete against other players for the lowest number of turns.")

}

function rollReminder(){
	let rollReminderText = "If dice total = 10, lose 10 points."
	+ "\r" + "If dice total = 20, lose 20 points."
	+ "\r" + "If dice total = 26, lose 26."
	+ "\r" + "If three of a kind, back to starting line."
	+ "\r" + "If total = 13, back to starting line." 
	

     return rollReminderText;
}


function findYourRaceTrack(){
	let tenSidedDice;
	let trackLocation;
	tenSidedDice = rollDice(10);

	let raceTrackArray = ["Churchhill Downs in Louisville, KY","Arlington Park in Arlington Heights, IL",
	 "Santa Anita Race Course in Arcadia, CA", "Saratoga Racecourse in Saratoga Springs, NY",
	  "Keeneland Race Course in Lexington, KY", "Del Mar Race Track in Del Mar, CA", 
	  "Monmouth Park in Oceanport, NJ", "Ruidoso Downs in Ruidoso Downs, NM" ,
	  "Belmont Park in Elmont, NY", "Oaklawn Park in Hot Springs, AR"]

	  trackLocation = raceTrackArray[tenSidedDice - 1 ];
	  alert("You rolled a " + tenSidedDice + "." +
	  	"\r" + "You will be racing at " + trackLocation + ".")
}


function nameYourHorse(){
	let twentySidedDice;
	let horseName;
	twentySidedDice = rollDice(20);

	let horseNameArray = ["Donkey Ho-tay", "Nosupeforyou","Maythehorsebewithyou", 
	"Passing Wind", "Horsey McHorseface","Hoof Hearted", "Half Fast", "Harry Trotter", 
	"Forrest Jump", "Mane Attraction", "Hay Girl", "Talk Derby to Me", "Britney Spurs",
	"Pony Soprano", "Tater Trot", "Mister Ed", "Maple Stirrup","Couldahadamercedes", 
	"Sofacanfast", "Twinkle Toes"]

	horseName = horseNameArray[twentySidedDice - 1 ];
	alert("You rolled a " + twentySidedDice + "." +
		"\r" + "Your horse's name is " + horseName + ".")
}

function displayNumberOfTurns(){
	alert("It took " + count + " turns to cross the finish line.")
}

function playAgain(){
	let playGameAgain = prompt("Do you want to race again? Y/N")
		if (playGameAgain === "Y" || playGameAgain === "y" || playGameAgain === "yes"){
		location.reload(true);
		}
		else{
			alert("Thanks for racing!");
			exit();
		}	
}

function rollOneToStart(){
	let fourSidedDice;
	fourSidedDice = rollDice(4);

		while ( currentScore == 0){
 			if (fourSidedDice !== 1){
 			count++;
			alert("You must roll a 1 to leave the Starting Line! You rolled a " + fourSidedDice
			+ "\r\n" + "Total Turns: " + count);
			fourSidedDice = rollDice(4);
			}
			else {
			currentScore = 1;
			count++;
			alert("You rolled a " + fourSidedDice + "... And you're off!"
			+ "\r" + "Your score is: " + currentScore + "."
			+ "\r\n" + "Total Turns: " + count);
			}
		}
}



function rollToPlayGame(){
	let sixSidedDice;
	let eightSidedDice;
	let twelveSidedDice;
	sixSidedDice = rollDice(6);
	eightSidedDice = rollDice(8);
	twelveSidedDice = rollDice(12);
	let sumOfDice = sixSidedDice + eightSidedDice + twelveSidedDice;
	while (currentScore >= 1 &&  currentScore < 200){
		if( sixSidedDice === eightSidedDice === twelveSidedDice || sumOfDice === 13 ){
			currentScore *= 0;
			count++;
			alert(rollReminder()
			+ "\r\n" + "Oh no! You rolled a " + sixSidedDice + ", " + eightSidedDice + ", and " + twelveSidedDice + " for a total of " + sumOfDice + "."
			+ "\r\n" + "Head back to the starting line."	
			+ "\r" + "Your score is: " + currentScore + "."
			+ "\r\n" + "Total Turns: " + count);
			rollToPlayGame();
		}
		else if ( sumOfDice === 10 ){
			currentScore -= 10;
				if (currentScore < 0){
					currentScore = 0
				}
			count++;
			alert(rollReminder()
			+ "\r\n" + "You rolled a " + sixSidedDice + ", " + eightSidedDice + ", and " + twelveSidedDice + " for a total of " + sumOfDice + "."
			+ "\r\n" + "Your horse stopped to eat grass. Lose 10 points for stalling."
			+ "\r" + "Your score is: " + currentScore + "."
			+ "\r\n" + "Total Turns: " + count);
			rollToPlayGame();

		}
		else if ( sumOfDice === 20){
			currentScore -= 20;
				if (currentScore < 0){
					currentScore = 0;
				}
			count++;
			alert(rollReminder() 
			+ "\r\n" + "You rolled a " + sixSidedDice + ", " + eightSidedDice + ", and " + twelveSidedDice + " for a total of " + sumOfDice + "."
			+ "\r\n" + "Your jockey needed to take a bathroom break. Lose 20 points."
			+ "\r" + "Your score is: " + currentScore + "."
			+ "\r\n" + "Total Turns: " + count);
			rollToPlayGame();

		}
		else if( sumOfDice === 26 ){
			currentScore -= 26;
				if (currentScore < 0){
					currentScore = 0;
				}
			count++;
			alert( rollReminder()
			+ "\r\n" + "You rolled a " + sixSidedDice + ", " + eightSidedDice + ", and " + twelveSidedDice + " for a total of " + sumOfDice + "."
			+ "\r\n" + "Your horse is 'maxed out' and needs a water break. Lose 26 points for pausing."
	 		+ "\r" + "Your score is: " + currentScore + "."
	 		+ "\r\n" + "Total Turns: " + count);
	 		rollToPlayGame();
	 	}
	 	else{
			currentScore += sumOfDice;
			count++;
			alert(rollReminder()
			+ "\r\n" + "You rolled a " + sixSidedDice + ", " + eightSidedDice + ", and " + twelveSidedDice + " for a total of " + sumOfDice + "."
	 		+ "\r" + "Your score is: " + currentScore + "."
	 		+ "\r\n" + "Total Turns: " + count);
	 		rollToPlayGame();
	 		}
	}
}


function playTheGame(){
	instructions();
	findYourRaceTrack();
	nameYourHorse();
	while (currentScore < 200){
		rollOneToStart();
		rollToPlayGame();
		}
	displayNumberOfTurns();
	playAgain();
}
 
playTheGame();
