function getWeather(){
    const apiKey = '780780fd190637b8bfcc9bef4ee1435b';
    const city = document.getElementById('city').value;
    if(!city){
        alert('please enter a city name');
        return;
    }
    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

    fetch(currentWeatherUrl)
        .then(response => response.json())
        .then(data => {displayWeather(data);})
        .catch(error => {console.error('Error fetching current weather data:', error); alert('Error fetching current weather data. Please try again');});

}

function displayWeather(data){
    const tempDivInfo = document.getElementById('temp-div');
}