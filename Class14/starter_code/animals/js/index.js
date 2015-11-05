$(document).ready(function() {
	//Variables
	var animals = ['animal1.jpg', 'animal2.jpg', 'animal3.jpg', 'animal4.jpg', 'animal5.jpg', 'animal6.jpg', 'animal7.jpg']

	var i = 0;

	//Events
	$('#next').click(goToNextAnimal);
	$('#back').click(goToPreviousAnimal);
	$('#stop').click(stopClock);
	$('#start').click(startClock);

	var clock = startClock();

	//Define functions

	function startClock() {
		clock = setInterval(goToNextAnimal, 2000);
		$('#stop').show('slow');
		$('#start').hide();
		return clock;
	}

	function stopClock() {
		clearInterval(clock);
		$('#start').show('slow');
		$('#stop').hide();
	}

	function goToNextAnimal() {
		// i = i + 1;
		i++;

		if (i == animals.length) {
			i = 0;
		}
		
		console.log('index : '+ i);

		var nextAnimal = animals[i];

		console.log('animal: ' + nextAnimal);

		$('#image-to-vote-on').attr('src','images/' + nextAnimal);
	}

	function goToPreviousAnimal(){
		i--;

		if (i == -1) {
			i = animals.length-1;
		}

		var previousAnimal = animals[i];

		$('#image-to-vote-on').attr('src','images/' +previousAnimal);
	}

});