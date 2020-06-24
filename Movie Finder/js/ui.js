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
                    <li class="list-group-item "><b>Rating: </b>${movie.data.rating}</li>
                    <li class="list-group-item "><b>Rating Votes: </b>${movie.data.rating_votes}</li>
                    </ul>
                </div>
              
            </div>
        </div>
        <h3 class="page-heading mb-3">Technical Detail <span class="badge badge-pill badge-secondary ">10</spa></h3>
        <div class="card card-body mb-2">
        <div class="row">
          <div class="col-md-6">
          <h6 class="page-heading mb-3">Repositorie Name</h6>
          </div>
          <div class="col-md-6">
          <h6 class="page-heading mb-3">Repositorie Details [starts,watchers,Forks]</h6>
          </div>
        </div>
        
        </div>
        <div id="prepo"></div>
        `;

        // console.log(user);
    }
// clear profile when empty
    clearProfile()
    {
        this.moviedetail.innerHTML = '';
    }



// show repos
showRepo(repos)
{
 let output = '';
 repos.forEach((element)=>{
   output += `
     <div class="card card-body mb-2">
     <div class="row">
       <div class="col-md-6">
       <a href="${element.html_url}">${element.name}</a>
       </div>
       <div class="col-md-6">
       <span class="badge badge-primary">Starts : ${element.stargazers_count}</span>
        <span class="badge badge-secondary">Watchers : ${element.watchers_count}</span>
        <span class="badge badge-success">Forks: ${element.forks_count}</span>
       </div>
     </div>
     
     </div>
   `;
 });
  document.getElementById('prepo').innerHTML = output;
}

}