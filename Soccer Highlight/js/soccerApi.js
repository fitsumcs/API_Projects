class SoccerApi
{

    constructor()
    {
    }

   async getSoccerData()
   {
       const respose = await fetch("https://free-football-soccer-videos1.p.rapidapi.com/v1/", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "free-football-soccer-videos1.p.rapidapi.com",
            "x-rapidapi-key": "64bca0886bmsha7377930000aed5p1a6aecjsn8fa7b68dbbfb"
        }
    });
       const data = await respose.json();
     
       return {data}
    }


}