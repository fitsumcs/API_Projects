class WeatherAPI{

    constructor(city)
    {
      this.Key = '48617cefaf294f0ea83479455233a976';
      this.city = city;
    }

// fetch 
async getWeatherInfo()
{
    // repose 
    const respone =await fetch(`https://api.weatherbit.io/v2.0/current?city=${this.city}&key=${this.Key}`)
    const responseData = await respone.json();
    
    return responseData.data;


}
changeLocation(city)
{
    this.city = city;
}

}