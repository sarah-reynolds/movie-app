
$(document).ready(function(){

	// console.log("test");

	// The base URL for all api calls
	var apiBaseUrl = "http://api.themoviedb.org/3/";

	// Base image URL
	var imageBaseUrl = "http://image.tmdb.org/t/p/";

	const nowPlayingUrl = apiBaseUrl + "movie/now_playing?api_key="+apiKey;
	
	var discoverUrl = apiBaseUrl + "discover/movie?api_key="+apiKey+ "&page=1";

	console.log("discoverUrl before click: " +discoverUrl);

	// END GOAL
	// 	When the page loads, have a filter from each group active
	// 	When a user clicks a filter button:
	// 		-make that button active
	// 		-append the data filter
	// 		-remove (make in-active) the previous data-filter (from the same group)
	// 		-call api to reload movies to populate
	// ASSUMPTIONS
	// 	var for each filter GROUP, universally set to query + empty
	// STEPS
	// 
	

	$('#fantasy').click(function(){
		queries = "&with_genres=14"
		discoverUrl = discoverUrl + queries;
		console.log("discoverUrl after after click, before fantasy function: " +discoverUrl);

		getFantasy();
	});


	function getFantasy(){
		$.getJSON(discoverUrl, function(discoverData){
			// console.log(discoverData);
			
			
			
			 nowPlayingHTML = '';
				for(let i = 0; i < discoverData.results.length; i++){
					poster = imageBaseUrl+'w300'+discoverData.results[i].poster_path;
					movieTitle = discoverData.results[i].title;
					// console.log(poster);
					nowPlayingHTML += '<div class="hvr-pop movie-wrapper col-sm-3">';
						nowPlayingHTML += '<div class="movie-title text-center">'+movieTitle+'</div>';
						nowPlayingHTML += '<img src="'+poster+'">';
					nowPlayingHTML += '</div>';
				}
				$('#movie-grid').html(nowPlayingHTML);
				console.log("discoverUrl after after click, after fantasy function: " +discoverUrl);



		});
	}

	$.getJSON(nowPlayingUrl, function(nowPlayingData){
		// console.log(nowPlayingData);
		var nowPlayingHTML = '';
		for(let i = 0; i < nowPlayingData.results.length; i++){
			var poster = imageBaseUrl+'w300'+nowPlayingData.results[i].poster_path;
			var movieTitle = nowPlayingData.results[i].title;
			// console.log(poster);
			nowPlayingHTML += '<div class="hvr-pop movie-wrapper col-sm-3">';
				nowPlayingHTML += '<div class="movie-title text-center">'+movieTitle+'</div>';
				nowPlayingHTML += '<img src="'+poster+'">';
			nowPlayingHTML += '</div>';
		}
		$('#movie-grid').html(nowPlayingHTML);
				console.log("now playing data: "+nowPlayingUrl);

	});

});


// when a filter button is clicked, concatenate the md query onto a url
// when the user clicks submit, make the api call and populate the results

// var queries = &page=1





// api call = discoverUrl + &page=1 &with_genres=14

// api call = discoverUrl + &page=1 + queries
