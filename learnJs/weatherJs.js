// Replace 'YOUR_API_KEY' with your OpenWeatherMap API key
const apiKey = 'xxxxxxx';
const city = 'Jakarta'; // Replace with your desired city
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    console.log(`Weather in ${data.name}:`);
    console.log(`Temperature: ${data.main.temp}°C`);
    console.log(`Description: ${data.weather[0].description}`);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
