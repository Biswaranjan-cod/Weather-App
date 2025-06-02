const apiKey = 'e1fc52237b7241a592f57d529366e52f'; // Replace with your own key

document.getElementById('searchBtn').addEventListener('click', () => {
  const city = document.getElementById('cityInput').value;
  if (city) {
    getWeather(city);
  }
});

function getWeather(city) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
      const weatherResult = document.getElementById('weatherResult');
      if (data.cod === 200) {
        weatherResult.innerHTML = `
          <h2>${data.name}</h2>
          <p>Temperature: ${data.main.temp} °C</p>
          <p>Weather: ${data.weather[0].description}</p>
        `;
      } else {
        weatherResult.innerHTML = `<p>City not found.</p>`;
      }
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
    });
}
