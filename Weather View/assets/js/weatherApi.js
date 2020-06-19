class WeatherAPI{

    constructor(city,state)
    {
      this.Key = '48617cefaf294f0ea83479455233a976';
      this.city = city;
      this.state = state;
    }

// fetch 
async getWeatherInfo()
{
    // repose 
    const respone =await fetch(`https://api.weatherbit.io/v2.0/current?city=${this.city}=${this.Key}`)
    const responseData = await respone.json();
    
    return responseData.data;


}
changeLocation(city,state)
{
    this.city = city;
    this.state = state;
}

}