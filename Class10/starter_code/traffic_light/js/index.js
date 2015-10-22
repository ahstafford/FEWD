//Implement the red light using jQuery. Don't forget to add the script tags.

$(document).ready(function(){

	$('#stopButton').click(illuminateStopLightRed);
	$('#slowButton').click(illuminateSlowLightYellow);
	$('#goButton').click(illuminateGoLightGreen);

	function illuminateStopLightRed () {
		clearLights();
		$('#stopLight').css('background-color','red');
	}

	function illuminateSlowLightYellow () {
		clearLights();
		$('#slowLight').css('background-color','yellow');
	}

	function illuminateGoLightGreen () {
		clearLights();
		$('#goLight').css('background-color','green');
	}

	function clearLights(){
	  $('.blub').css('background-color','black');
	}

});