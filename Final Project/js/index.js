$(document).ready(function(){
	$('#learnMoreButton').click(showText);

	//funtion to show hidden text
	function showText(){
		$('#learnMoreText').show('slow');
		$('#learnMoreButton').hide();
	}
});