class WeatherUI
{
  
    constructor()
    {
    //    get elements of the dom 
    this.location = document.querySelector('#w-location');
    this.desc = document.querySelector('#w-desc');
    this.string = document.querySelector('#w-string');
    this.details = document.querySelector('#w-details');
    this.icon = document.querySelector('#w-icon');
    this.humedity = document.querySelector('#w-humidity');
    this.feelsLike = document.querySelector('#w-feels-like');
    this.dwpoint = document.querySelector('#w-dewpoint');
    this.wind = document.querySelector('#w-wind');


    }

    // displaay
    displayData(data)
    {
        this.location.textContent = data.city_name ;
        this.desc.textContent = data.weather.description;
        this.string.textContent = data.weather.code;
        this.icon.setAttribute('src',`https://www.weatherbit.io/static/img/icons/${data.weather.icon}.png`);
        this.humedity.textContent = `Relative Humidity:  ${data.rh}`;
        this.feelsLike.textContent = `Feels Like: ${data.app_temp}`;
        this.dwpoint.textContent = `DewPoint: ${data.dewpt}`;
        this.wind.textContent = `Wind: ${data.wind_cdir_full}`;
    }


}
