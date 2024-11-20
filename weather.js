let showWeather = false;
const weatherDisplay = document.getElementById("time-display"); 
const weatherButton = document.getElementById("time-button");

function fetchWeather() {
    const apiKey = '321e26d5b93b12a6e8338a251a430662'; 
    const city = 'Astana'; 

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ru`)
        .then(response => response.json())
        .then(data => {
            const weather = `
                <p><strong>City:</strong> ${data.name}</p>
                <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
                <p><strong>Weather:</strong> ${data.weather[0].description}</p>
                <p><strong>Wind speed:</strong> ${data.wind.speed} м/с</p>
            `;
            weatherDisplay.innerHTML = weather;
        })
        .catch(error => {
            weatherDisplay.innerHTML = '<p>Не удалось загрузить данные о погоде.</p>';
            console.error('Ошибка:', error);
        });
}

weatherButton.addEventListener("click", function () {
    showWeather = !showWeather; 
    weatherDisplay.style.display = showWeather ? "block" : "none"; 

    if (showWeather) {
        weatherButton.style.transition = "transform 0.5s"; 
        weatherButton.style.transform = "rotate(90deg)"; 
        fetchWeather(); 
    } else {
        weatherButton.style.transform = "rotate(0deg)"; 
    }
});
