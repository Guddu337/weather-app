const apiKey = "644a8aa540816b38338d9c681567fc21";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if (data.weather[0].main === "Clouds") {
            weatherIcon.src = "cloudy.png";
        } else if (data.weather[0].main === "Clear") {
            weatherIcon.src = "sun.png";
        } else if (data.weather[0].main === "Cloudy1") {
            weatherIcon.src = "cloudy(1).png";
        } else if (data.weather[0].main === "Cloudy2") {
            weatherIcon.src = "cloudy(2).png";
        } else if (data.weather[0].main === "Cloudy3") {
            weatherIcon.src = "cloudy(3).png";
        } else if (data.weather[0].main === "Cloudy4") {
            weatherIcon.src = "cloudy(4).png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
