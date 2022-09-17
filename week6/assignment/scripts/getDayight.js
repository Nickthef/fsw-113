// This script should return the results of a function that use data from the api to determine whether it 
// is daylight in the specified city. It should return "blue" if daylight, and "black" if night time.
export default function getDaylight(sunrise, sunset, time) {
    const weatherDiv = document.querySelector(".weatherWrapper");
    if (sunrise > time && sunset < time) {
        weatherDiv.style.backgroundColor = "black";
    } else if (sunrise < time && sunset > time) {
        weatherDiv.style.backgroundColor = "blue";
    }
}
