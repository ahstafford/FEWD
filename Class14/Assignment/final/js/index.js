//Use function to wait for page to load 
$(document).ready(function(){
	//Array to store city options
	var cities = ['NYC', 'SF', 'LA', 'ATX', 'SYD']

	//For loop to populate the select menu with the list of cities
	 for (var x = 0; x < cities.length; x++) {
	 	var selectCity = cities[x];
	 	$('#city-type').append('<option value=' + selectCity + '>' + selectCity + '</option>')
	 }

	//Listen for user to select a city from the menu
	$('#city-type').change(displayCityPicture);
	
	//Function to store user input and change background based on entry
	function displayCityPicture(){
	
	//Get user input and store in variable
	var city = $('#city-type').val();

	//Determine which image to display as background based on the user input and change background
	if (city == 'NYC') {
		$('body').attr('class','nyc');
		}
	else if (city == 'SF'){
		$('body').attr('class','sf');
		}
	else if (city == 'LA'){
		$('body').attr('class','la');
		}
	else if (city == 'ATX'){
		$('body').attr('class','austin');
		}
	else if (city == 'SYD'){
		$('body').attr('class','sydney');
		}

	}	
});