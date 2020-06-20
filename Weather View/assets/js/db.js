class Database
{
    constructor()
    {
        this.city;
        this.defaultCity = 'Addis Abab';
    }

getfromDb()
{

  if(localStorage.getItem('city')===null)
  {
    this.city = this.defaultCity;
  }
  else
  {
     this.city= localStorage.getItem('city');
  }

  return {city:this.city}
}

//set 
setDb(city)
{
  localStorage.setItem('city', city)
}

}