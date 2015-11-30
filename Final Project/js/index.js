$(document).ready(function(){

	//Load event to animate border
	$('.lineGrowBefore').addClass('lineGrowAfter');

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

	//Event to listen for mouse over on class Rostech
	$('.rostech').hover(mouseOverRostech, mouseLeaveRostech);

	//function to show text for Rostech
	function mouseOverRostech() {
		$('#rostechText').show();
	}

	//function to hide text for Rostech
	function mouseLeaveRostech(){
		$('#rostechText').hide();
	}

	//Event to listen for mouse over on class Iron
	$('.iron').hover(mouseOverIron, mouseLeaveIron);

	//function to show text for Iron
	function mouseOverIron() {
		$('#ironText').show();
	}

	//function to hide text for Iron
	function mouseLeaveIron(){
		$('#ironText').hide();
	}

	//Event to listen for mouse over on class taptin
	$('.taptin').hover(mouseOverTaptin, mouseLeaveTaptin);

	//function to show text for taptin
	function mouseOverTaptin() {
		$('#taptinText').show();
	}

	//function to hide text for taptin
	function mouseLeaveTaptin(){
		$('#taptinText').hide();
	}

	//Event to listen for mouse over on class utility
	$('.utility').hover(mouseOverUtility, mouseLeaveUtility);

	//function to show text for utility
	function mouseOverUtility() {
		$('#utilityText').show();
	}

	//function to hide text for utility
	function mouseLeaveUtility(){
		$('#utilityText').hide();
	}
});