$(document).ready(function(){
	//setting up a varible to store whether the lights are on or off
	var lights = 'on';

	//Listener waiting for user to click the light switch button
	$('#light_switch').click (switchLights);

	function switchLights(){
		//Test to see if the lights are on
		if(lights === 'on'){
			//If yes, change background color to black
			$('body').css('background', 'black');
			//update the current state to lights off
			lights = 'off';
		} else if (lights === 'off') {
		//Test to see if the lights are off
			$('body').css('background', 'white');
			//If yes, change background color to white
			lights = 'on';
			//update the current state to lights o
		}
	}
});