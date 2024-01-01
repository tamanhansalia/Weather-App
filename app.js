const apiKey = "0197976de03507d2803e787c1bdaea1b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");


async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);


    if (response.status == 404) {

        // for showing error message and remove the weather info.
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {
        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " kmph";

        // for remove the error message and show the weather
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";

    }


}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})
