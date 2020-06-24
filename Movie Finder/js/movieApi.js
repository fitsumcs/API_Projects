class Movie
{

    constructor()
    {
    
    }

   async getMovie(movieName)
   {
       const response = await fetch(`https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/${movieName}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com",
            "x-rapidapi-key": "64bca0886bmsha7377930000aed5p1a6aecjsn8fa7b68dbbfb"
        }
    }) 
       const data = await response.json();
     
      return {data}
    }

}