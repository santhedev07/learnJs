const apiKey = '30c84f42d81774272dd1476019a431c7';
const city = 'Jakarta'; // Replace with your desired city
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
// Function to fetch weather data and display it

function fetchWeather() {
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const weather = document.getElementById('weather');
            weather.innerHTML = `
                <p>Weather in ${data.name}</p>
                <p>Temperature: ${data.main.temp} °C</p>
                <p>Weather: ${data.weather[0].description}</p>
            `;
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}