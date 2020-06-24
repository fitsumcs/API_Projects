class MovieUI {
    constructor() {
        this.moviedetail = document.querySelector('#moviedetail');
    }

    showMovie(movie) {
        this.moviedetail.innerHTML = `
        <div class= "card card-body mb-3">
            <div class="row">  
                <div class="col-md-3">
                    <img class="img-fluid mb-2" src="${movie.data.poster}">
                    <a href="${movie.data.trailer.link}" target="blank" class="btn btn-secondary btn-block mb-4" >View Trailer</a>
                </div>
                <div class="col-md-9">
                    <ul class="list-group">
                    <li class="list-group-item "><b>Title: </b>${movie.data.title}</li>
                    <li class="list-group-item "><b>Year: </b>${movie.data.year}</li>
                    <li class="list-group-item "><b>Plot: </b>${movie.data.plot}</li>
                    <li class="list-group-item "><b>Length: </b>${movie.data.length}</li>
                    <li class="list-group-item "><b>Rating: </b>${movie.data.rating}</li>
                    <li class="list-group-item "><b>Rating Votes: </b>${movie.data.rating_votes}</li>
                    </ul>
                </div>
              
            </div>
        </div>
        <h3 class="page-heading mb-3">Movie Detail</h3>
        <div class="card card-body mb-2">
        <div class="row">
          <div class="col-md-6">
          <h6 class="page-heading mb-3">Actor Name</h6>
          </div>
          <div class="col-md-6">
          <h6 class="page-heading mb-3">Character Played</h6>
          </div>
        </div>
        
        </div>
        <div id="actor"></div>
        `;

        // console.log(user);
    }
// clear profile when empty
    clearUi()
    {
        this.moviedetail.innerHTML = '';
    }



// show repos
showCastMembers(castM)
{
 let output = '';

 castM.data.cast.forEach((element)=>{
   output += `
     <div class="card card-body mb-2">
     <div class="row">
       <div class="col-md-6">
       <li class="list-group-item ">${element.actor}</li>
       </div>
       <div class="col-md-6">
       <li class="list-group-item ">${element.character}</li>
       </div>
     </div>
     
     </div>
   `;
 });
  document.getElementById('actor').innerHTML = output;
}

}