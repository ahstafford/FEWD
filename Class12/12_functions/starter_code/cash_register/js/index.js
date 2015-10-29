$(document).ready(function(){
	//Variable for current total
	var total = 0;

	//Listen for the user to submit a new cost
	$('#entry').submit(sumTotalAndNewEntry);

	function sumTotalAndNewEntry(event){
		event.preventDefault();
		//Get the value from the input field newEntry
		var entryNew = $('#newEntry').val();

		//Convert the value to a number
		var entryNewNum = parseFloat(entryNew);

		//Change the number of the new entry into currency
		var entryNewCurrency = currencyFormat(entryNewNum);

		var totalCurrency;

		//Update the current total with new entry
		total += entryNewNum;

		//Change the new total into currency
		totalCurrency = currencyFormat(total);
		console.log('totalCurrency: ' + totalCurrency);

		//display new entries on the page in currency format
		$('#entries').append('<tr><td>'+entryNewCurrency+'</td></tr>');

		//display the total on the page in currency 
		$('#total').text(totalCurrency);
	}
	//Convert to currency 
	function currencyFormat(numberToConvert){
		//Take the number passed to currencyFormat and give it two decimals
		var currency = numberToConvert.toFixed(2);
		//Add dollar sign to currency number
		var currencyWithDollar = '$' + currency;
		//Gives the currency with a dollar sign
		return currencyWithDollar;
	}

});