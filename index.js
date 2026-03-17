// index.js
const weatherApi = "https://api.weather.gov/alerts/active?area="

// Your code here!
function fetchWeatherAlerts(state) {
    fetch(`https://api.weather.gov/alerts/active?area=${state}`)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        displayAlerts(data);
    })
    .catch((error) => {
        console.log(error.message);
    })
}

function displayAlerts(data) {
    console.log(data.title);
    console.log(data.features.length);

    data.features.forEach((alert) => {
        console.log(alert.properties.headline);
    });
}

fetchWeatherAlerts("TN");