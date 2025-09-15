const API_KEY = "3bf7f61c341af52c82e9ba6eddb5ce71";

async function checkWeather(city) {
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${API_KEY}`;
    const response = await fetch(API_URL);
 

    if(response.status == 404){

         document.querySelector(".error").style.display = "block";
          document.querySelector(".weather").style.display = "none";
    }else{   var data = await response.json();

    // console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = `${Math.round(data.main.temp)} °C`;
    document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
    document.querySelector(".wind").innerHTML = `${data.wind.speed} km/h`;

    if (data.weather[0].main == "Clouds") {
        document.querySelector(".weather-icon").src = "assets/clouds.png";
    } else if (data.weather[0].main == "Clear") {
        document.querySelector(".weather-icon").src = "assets/clear.png";
    } else if (data.weather[0].main == "Rain") {
        document.querySelector(".weather-icon").src = "assets/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
        document.querySelector(".weather-icon").src = "assets/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
        document.querySelector(".weather-icon").src = "assets/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
     document.querySelector(".error").style.display = "none";
}
}

document.querySelector(".search button").addEventListener("click", () => {
    const city = document.querySelector(".search input").value;
    if (city) {
        checkWeather(city);
    }

        
    
});