const weather = new WeatherAPI('London','Boston');
const ui = new WeatherUI();
// On Dom load 
document.addEventListener('DOMContentLoaded',getWeatherData);


// get weather Data
function getWeatherData()
{
    weather.getWeatherInfo()
    .then(data=>{
        ui.displayData(data[0]);
    })
    .catch(err=>{
        console.log(err)
    })

}

