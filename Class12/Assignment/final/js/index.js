//Use function to wait for page to load 
$(document).ready(function(){
	//Listen for user to click on update button
	$('#submit-btn').click(displayCityPicture);
	
	//Function to store user input and change background based on entry
	function displayCityPicture(){

	//Prevent a form submission using event prevent function
	event.preventDefault();
	
	//Get user input and store in variable
	var city = $('#city-type').val();
	//Trim spaces from user input
	city = city.trim();

	//Determine which image to display as background based on the user input and change background
	if (city == 'New York' || city == 'New York City' || city == 'NYC') {
		$('body').css('background-image','url(images/nyc.jpg');
		}
	else if (city == 'San Francisco' || city == 'SF' || city == 'Bay Area'){
		$('body').css('background-image','url(images/sf.jpg');
		}
	else if (city == 'Los Angeles' || city == 'LA' || city == 'LAX'){
		$('body').css('background-image','url(images/la.jpg');
		}
	else if (city == 'Austin' || city == 'ATX'){
		$('body').css('background-image','url(images/austin.jpg');
		}
	else if (city == 'Sydney' || city == 'SYD'){
		$('body').css('background-image','url(images/sydney.jpg');
		}
	else {$('body').css('background-image','url(images/citipix_skyline.jpg');
		}
	//Reset input field to blank after button click
	$('#city-type').val('');
	}	
});