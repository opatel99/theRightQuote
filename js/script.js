$(document)
	.ready(function() {
		generate();
	});

function generate() {
	var url;
	$.getJSON('http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?', function(apiQuote) {
		$("#quote-text")
			.html(apiQuote.quoteText);
		if (apiQuote.quoteAuthor !== "") {
			$("#quote-author")
				.html(apiQuote.quoteAuthor);
			url = "https://twitter.com/intent/tweet?text=" + apiQuote.quoteText + "-" + apiQuote.quoteAuthor;
			$("#twitter")
				.attr("href", url);
		} else {
			$("#quote-author")
				.html("Anonymous");
			url = "https://twitter.com/intent/tweet?text=" + apiQuote.quoteText + "-Anonymous";
			$("#twitter")
				.attr("href", url);
		}

	});
}
