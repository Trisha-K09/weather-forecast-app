$(document).ready(function() {
    $('#getWeather').click(function() {
        const city = $('#city').val();
        const apiKey = 'ed660eba2f3a0f83525c94b563f1c499'; // Replace with your OpenWeatherMap API Key
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        $.getJSON(apiUrl, function(data) {
            const weather = `
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${data.name}, ${data.sys.country}</h5>
                        <p class="card-text">Temperature: ${data.main.temp} °C</p>
                        <p class="card-text">Weather: ${data.weather[0].description}</p>
                        <p class="card-text">Humidity: ${data.main.humidity}%</p>
                        <p class="card-text">Wind Speed: ${data.wind.speed} m/s</p>
                    </div>
                </div>
            `;
            $('#weatherResult').html(weather);
        }).fail(function() {
            $('#weatherResult').html('<div class="alert alert-danger">City not found!</div>');
        });
    });
});
