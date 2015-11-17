$(document).ready(function(){

	//Event to list for button click to show text
	$('#learnMoreButton').click(showText);

	//funtion to show hidden text
	function showText(){
		$('#learnMoreText').show('slow');
		$('#learnMoreButton').hide();
	}

	//Load event to animate border
	$('.lineGrowBefore').addClass('lineGrowAfter');
});