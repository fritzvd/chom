
    $.ajax({
      url: "https://api.instagram.com/v1/tags/cheesesofmexico/media/recent?client_id=e8020c94851e4938ae02ca397c441fd4", 
      dataType: 'jsonp', 
      method: 'GET'}).done(function(response){
        $.each(response.data, function(count){
        	if (count < 8){
          $('#images').append('<a href="/news/"><img class="instagram" src="'+ this.images.thumbnail.url +'" /></a>')
	      }
        })
      })