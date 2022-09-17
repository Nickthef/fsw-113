// import the convertTemp.js and getDaylight.js scripts with their default export

// declare any variables needed

// create an event listener for the click of the goBttn that calls a function to fetch the weather data

// create a function that calls the function that queries the api 
// and then creates promises that will call a function to write the weather data to the HTML page        

// use an asynchronous call to fetches the current weather for the specified city, awaits it, 
// and returns the resulting data

// create a function that writes the temperature (using local units), humidity, and conditions
// this function should also change the background color of the weather app to blue during the daylight
// hours at the specified city

import convertTemp from "./convertTemp.js";
import getDaylight from "./getDayight.js";

const button = document.getElementById("goBttn");
button.addEventListener("click", async function () {
    const input = document.getElementById("city");
    const response = await getData(input.value);
    displayData(response) 
});

async function getData (cityname) {
    const key = "8e2b888c8739bdea6ecec632123a2417";
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${key}`);
    const data = await response.json();
    return data;
}

function displayData(response) {
    console.log(response)

    const temp = convertTemp(response.sys.country , response.main.temp);
    getDaylight(response.sys.sunrise , response.sys.sunset , response.dt);

    document.getElementById("conditionsData").textContent = response.weather;
    document.getElementById("tempData").textContent = temp;
    document.getElementById("humidData").textContent = response.main.humidity;


}

