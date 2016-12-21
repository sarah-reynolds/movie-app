
$(document).ready(function(){

	// console.log("test");

	// The base URL for all api calls
	var apiBaseUrl = "http://api.themoviedb.org/3/";

	// Base image URL
	var imageBaseUrl = "http://image.tmdb.org/t/p/";

	const nowPlayingUrl = apiBaseUrl + "movie/now_playing?api_key="+apiKey;
	
	const discoverUrl = apiBaseUrl + "discover/movie?api_key="+apiKey;
	
	var genreList = apiBaseUrl+"genre/movie/list?api_key="+apiKey;

	$.getJSON(genreList, function(genreData){
		// console.log(genreList);
	});

	$.getJSON(discoverUrl, function(discoverData){
		console.log(discoverData);
	});

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
	})

})