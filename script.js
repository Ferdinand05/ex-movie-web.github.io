//* SECTION CALLBACK
// OMDB API - http://www.omdbapi.com/?apikey=a8ec1742&s=avengers

// eslint-disable-next-line no-undef

$('.search-button').on('click',function(){

    $.ajax({
    
    url: "http://www.omdbapi.com/?apikey=a8ec1742&s="+$('.input-keyword').val(),
    success : results => {
        const movies = results.Search;
        let cards ='';
        movies.forEach( (m) => {
            cards += showCards(m);
        } );
             // eslint-disable-next-line no-undef
    $('.movie-container').html(cards);
        
        //? ketika tombol show detail di klik
             // eslint-disable-next-line no-undef
    $('.modal-detail-button').on("click", function () {
             // eslint-disable-next-line no-undef
        // console.log($(this).data('imdbid'));
    
        // eslint-disable-next-line no-undef
        $.ajax({
            url : "http://www.omdbapi.com/?apikey=a8ec1742&i=" + $(this).data('imdbid'),
            success : movie => {
                console.log(movie);
                const movieDetail = showModalBody(movie);
    
        // eslint-disable-next-line no-undef
        $('.modal-body').html(movieDetail);
            
    },
    
    error : (e) => {
        console.log(e.responseText);
    }
    
    })
    });
    
    
    },
    
    error: (e) => {
        console.log(e.responseText);
    }
    
    });

})




function showCards(m){
    return `<div class="col-md-4 my-5">
    <div class="card">
    <img src="${m.Poster}" class="card-img-top" alt="${m.Title}">
    <div class="card-body">
    <h5 class="card-title">${m.Title}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${m.Year}<h6>
    <a href="#" class="btn btn-primary modal-detail-button" data-toggle="modal" data-target="#movieDetailModal" data-imdbid="${m.imdbID}">Show Detail</a>
    </div>
    </div>
    </div>`;
}

function showModalBody(movie){
    return `<div class="container-fluid">
    <div class="row">

      <div class="col-md-3">
        <img src="${movie.Poster}" class="img-fluid">
      </div>

      <div class="col-md">

        <ul class="list-group">
          <li class="list-group-item"><h4>${movie.Title} (${movie.Year})</h4></li>
          <li class="list-group-item"><strong>Director : </strong>${movie.Director}</li>
          <li class="list-group-item"><strong>Actors : </strong>${movie.Actors}</li>
          <li class="list-group-item"><strong>Genre : </strong>${movie.Genre}</li>
          <li class="list-group-item"><strong>Story Line : </strong> <br>${movie.Plot}</li>
        </ul>

      </div>
    </div>
  </div>`;
}




















