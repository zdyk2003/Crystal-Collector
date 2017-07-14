// 	var for random number
	// var for wins
	// var for losses
	// var for score
	// var for random number 
	// var for random number for gems

$(document).ready(function(){

	var wins = 0;
	var losses = 0;
	var counter = 0;

		// generate random number
		var numberBank = [22,65,88,105];
		var ranNumber = numberBank[Math.floor(Math.random() * numberBank.length)];
		$("#randomNumber").text("Number to Match: " + ranNumber);

		// var for random values for crystals
		var gemNumBank = [1, 5, 8, 12];
		var ranGemNum = gemNumBank[Math.floor(Math.random() * gemNumBank.length)];
		console.log(ranGemNum);

		// need to get the random number to assign to each image individually
		// instead of all the images having the same random number
		for (var i = 0; i < gemNumBank.length; i++) {
			var gems = $(".gems");
			var gemValue= ranGemNum;
		}
		
// add to the score by clicking on the gems to determine wins + losses
	
	$(".gems").on("click", function() {
		counter +=  gemValue;
		$(".counter").text(counter);
		console.log(gemValue);

			if(counter === ranNumber){
				wins++;
				$(".win").text("Wins: " + wins);
				newGame();
			}
			else if(counter > ranNumber) {
				losses++;
				$(".loss").text("Losses: " + losses);
				newGame();
			}	

	});


// //need to clear the console so that is does not continue to add to the counter even though the counter on the screen is set back to zero
	function newGame() {
		counter = 0;
		$(".counter").text(counter);
		console.clear();
	 	var ranNumber = numberBank[Math.floor(Math.random() * numberBank.length)];
		$("#randomNumber").text("Number to Match: " + ranNumber);
		var ranGemNum = gemNumBank[Math.floor(Math.random() * gemNumBank.length)];
	}	

});	



//data attr gemValue is equal to the array values ==always returns a NaN value?
		// gems.attr("data-gemValue", ranGemNum[i]);
		//take the gem value and convert it to an integer and then add to the counter
		// var gemValue = ($(this).attr("data-gemValue"));
		// 	gemValue = parseInt(gemValue);
	



	



