const weather = new WeatherAPI('London','Boston');

// On Dom load 
document.addEventListener('DOMContentLoaded',getWeatherData);


// get weather Data
function getWeatherData()
{
    weather.getWeatherInfo()
    .then(data=>{
        console.log(data)
    })
    .catch(err=>{
        console.log('Err')
    })

}

