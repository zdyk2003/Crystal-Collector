//GLOBAL VARIALBES
//==========================================================
//Crystal Variable
var crystal = {
	blue: {
		name: "blue",
		value: 0
	},
	green: {
		name: "green",
		value: 0
	},
	pink: {
		name: "pink",
		value: 0
	},
	purple: {
		name: "purple",
		value: 0
	},
}
//Scores(Target and Current)
var currentScore = 0;
var targetScore = 0;
//Wins and losses
var winCount = 0;
var lossCount = 0;

//FUNCTIONS
//==============================================================
var getRandom = function(min, max) {
	return Math.floor(Math.random() *(max - min + 1)) + min;
}
//starts the game
var startGame = function() {
 
 	//reset the current score
 	currentScore = 0;
 	//set the new target score (between 19-120)
 	targetScore  			= getRandom(19, 120); 
 	//set different values for the crystals (between 1-12)
 	crystal.blue.value 		= getRandom(1,12);
 	crystal.green.value 	= getRandom(1,12);
 	crystal.pink.value 		= getRandom(1,12);
 	crystal.purple.value 	= getRandom(1,12);

 	//change HTML to reflect changes
 	$("#totalScore").html("<h2>Your Score: " + currentScore + "</h2>");
 	$("#randomNumber").html("Number to Match: " + targetScore);
 	//test
 	console.log("Target Score: " + targetScore);
 	console.log("blue " + crystal.blue.value + " | green: " + crystal.green.value + " | pink: " + crystal.pink.value + " | purple: " + crystal.purple.value);
}
// function for crystal click
var addValue = function(crystal) {
	//change current score
	currentScore = currentScore + crystal.value;
	//change HTML to reflect current score
	$("#totalScore").html("<h2>Your Score: " + currentScore + "</h2>");

	checkWin();

	console.log("Your score: " + currentScore);
}
//check if user won or lost and reset the game
var checkWin = function() {
	if(currentScore > targetScore) {
		console.log('loss');
		lossCount++;
		$(".lossCount").html("Losses: " + lossCount);
		//restart the game
		startGame();
	}
	else if (currentScore === targetScore){
		console.log('win');
		winCount++;
		$(".winCount").html("Wins: " + winCount);
		//restart the game
		startGame();
	}
}
		
//CRYSTAL VALUE
//=======================================================================	

//starts the game
startGame();

	$("#blue").on("click", function() {
		addValue(crystal.blue);
	});
	$("#green").on("click", function() {
		addValue(crystal.green);
	});
	$("#pink").on("click", function() {
		addValue(crystal.pink);
	});
	$("#purple").on("click", function() {
		addValue(crystal.purple);
	});
	



	



