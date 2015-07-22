var apikey = '3ce9c787e57ca42e61b85ba9c89abf198a78684d'; // Put your API key here

// Use this function to do stuff with your results. 
// It is called after 'search' is executed.
function searchCallback(results) {
    console.log(results);


	$('body').append("<div class='gameName'>" + results[0].image[2] + " " + results[0].name + "</div>");
	$('body').on('click', '#gameName', function() {

		var $el = $('body').children().last();

		$el.append('<p>' + 'Description: ' + results[0].desk + '</p>');
		$el.append('<p>' + 'Release Date: ' + results[0].original_release_date + '</p>');
		$el.append('<p>' + 'Platform: ' + results[0].platform + '</p>');

	});
}

$(document).ready(function() {



	// Start the search here

	$('#search').submit(function() {

	
		var $input = $("#search :input");
		console.log("This is inputs:" + $input);
		
		var values = {};
		
		console.log($input.val());
		search($input.val());

	});

});

// HELPER FUNCTION
// Executes a search using 'query' and runs searchCallback on the results of a success.
function search(query){

	$.ajax ({
	    type: 'GET',
	    dataType: 'jsonp',
	    crossDomain: true,
	    jsonp: 'json_callback',
	    url: 'http://www.giantbomb.com/api/search/?format=jsonp&resources=game&api_key=' + apikey +'&query=' + encodeURI(query),
	    complete: function() {
	        console.log('ajax complete');
	    },
	    success: function(data) {
	        searchCallback(data.results);
	    }
	});

}
