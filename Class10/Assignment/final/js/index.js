$(document).ready(function(){

	$('#readMoreArticle1').click(expandMore);
	$('#readlessShowArticle1').click(hideMore);
	$('.learnMore').click(expandLearnMore);

	function expandMore () {
		$('#showClickArticle1').slideDown();
		$('#readMoreArticle1').hide();
		$('#readlessShowArticle1').show();
	}

	function hideMore () {
		$('#showClickArticle1').slideUp('slow', function () {
			$('#readlessShowArticle1').hide();
			$('#readMoreArticle1').show();
		});
	}

	function expandLearnMore () {
		$('#learnMoreText').slideDown();
		$('.learnMore').hide();
	}

});

