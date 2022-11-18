/*$.ajax({*/
    //url: "https://api.instagram.com/v1/tags/cheesesofmexico/media/recent?client_id=e8020c94851e4938ae02ca397c441fd4",
    //dataType: 'jsonp',
    //method: 'GET'
//}).done(function(response) {
    //$.each(response.data, function(count) {
        //if (count < 8) {
            //$('#images').append('<a href="/news/"><img class="instagram" src="' + this.images.thumbnail.url + '" /></a>')
        //}
    //})
//})


// past
//   http://api.songkick.com/api/3.0/artists/{artist_id}/gigography.json?apikey=sSxFP4FVJ3wcxiBD

// coming up:
// http://api.songkick.com/api/3.0/artists/{artist_id}/calendar.json?apikey=sSxFP4FVJ3wcxiBD



// $.getJSON({
//   url: "http://api.songkick.com/api/3.0/artists/6838049/calendar.json?apikey=sSxFP4FVJ3wcxiBD&jsoncallback=?", 
//   method: 'GET'}).done(function(response){
//       console.log(Object.keys(response.resultsPage.results).length)
//       if (Object.keys(response.resultsPage.results).length < 1) {
//         $('#comingup').append("<li>We've got nothing lined up in the coming month</li>");
//       }
//     $.each(response.resultsPage.results, function(count){
//       if (count < 8){
//       $('#comingup').append('<li><a href="'+ this.uri +'">' + this.displayName + '</a></li>')
//     }
//     })
//   });

// $.getJSON({
//   url: "http://api.songkick.com/api/3.0/artists/6838049/gigography.json?apikey=sSxFP4FVJ3wcxiBD&order=desc&jsoncallback=?", 
//   method: 'GET'}).done(function(response){
//     // var response = response();
//     $.each(response.resultsPage.results.event, function(count){
//       if (count < 8){
//         var location = this.venue.displayName;
//         if (location == 'Unknown venue') {
//           location = this.venue.metroArea.displayName;
//         }
//       $('#past').append('<li><a href="'+ this.uri +'">' + location + ' - ' + this.start.date + '</a></li>')
//     }
//     })
//   });

$.getJSON("http://api.songkick.com/api/3.0/artists/6838049/calendar.json?apikey=sSxFP4FVJ3wcxiBD&order=desc&jsoncallback=?",
    function(response) {
        console.log(Object.keys(response.resultsPage.results).length)
        if (Object.keys(response.resultsPage.results).length < 1) {
            $('#comingup').append("<li>We've got nothing lined up in the coming month</li>");
        }
        $.each(response.resultsPage.results.event, function(count) {
            if (count < 8) {
                var location = this.venue.displayName;
                if (location == 'Unknown venue') {
                    location = this.venue.metroArea.displayName;
                }
                $('#comingup').append('<li><a href="' + this.uri + '">' + location + ' - ' + this.start.date + '</a></li>')
            }
        })
    });

$.getJSON("http://api.songkick.com/api/3.0/artists/6838049/gigography.json?apikey=sSxFP4FVJ3wcxiBD&order=desc&jsoncallback=?",
    function(response) {
        // var response = response();
        $.each(response.resultsPage.results.event, function(count) {
            if (count < 8) {
                var location = this.venue.displayName;
                if (location == 'Unknown venue') {
                    location = this.venue.metroArea.displayName;
                }
                $('#past').append('<li><a href="' + this.uri + '">' + location + ' - ' + this.start.date + '</a></li>')
            }
        })
    });
