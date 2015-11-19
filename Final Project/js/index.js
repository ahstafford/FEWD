$(document).ready(function(){

	//Event to listen for button click to show text
	$('#learnMoreButton').click(showText);

	//funtion to show hidden text with Learn More button
	function showText(){
		$('#learnMoreText').show('slow');
		$('#learnMoreButton').hide();
	}

	//Event to listen for section expand
	$('.serviceTabs h3').click(showTab);

	//funtion to show hidden text on page sections
	function showTab() {
		console.log(this);
		$(this).next('div').slideToggle('slow');
	}


	//Load event to animate border
	$('.lineGrowBefore').addClass('lineGrowAfter');
});