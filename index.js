// index.js
const weatherApi = "https://api.weather.gov/alerts/active?area="
// Your code here!
document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector("#state-input");
  const button = document.querySelector("#fetch-alerts");
  const alertsDisplay = document.querySelector("#alerts-display");
  const errorMessage = document.querySelector("#error-message");

  button.addEventListener("click", () => {
    const state = input.value;
    fetchWeatherAlerts(state);
    input.value = "";
  });

  function fetchWeatherAlerts(state) {
    fetch(`${weatherApi}${state}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        errorMessage.textContent = "";
        errorMessage.classList.add("hidden");
        displayAlerts(data);
      })
      .catch((error) => {
        errorMessage.textContent = error.message;
        errorMessage.classList.remove("hidden");
      });
  }

  function displayAlerts(data) {
    alertsDisplay.innerHTML = "";

    const summary = document.createElement("h2");
    summary.textContent = `Weather Alerts: ${data.features.length}`;
    alertsDisplay.appendChild(summary);

    data.features.forEach((alert) => {
      const alertItem = document.createElement("p");
      alertItem.textContent = alert.properties.headline;
      alertsDisplay.appendChild(alertItem);
    });
  }
});
//fetchWeatherAlerts("TN");