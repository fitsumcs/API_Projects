class GitHub
{

    constructor()
    {
    }

   async getData()
   {
       const respose = await fetch("https://corona-virus-world-and-india-data.p.rapidapi.com/api", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "corona-virus-world-and-india-data.p.rapidapi.com",
            "x-rapidapi-key": "64bca0886bmsha7377930000aed5p1a6aecjsn8fa7b68dbbfb"
        }
    });
       const data = await respose.json();
     
      return {data}
    }

}