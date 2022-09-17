// This script should return the results of a function that converts the temperature provided by the api (Kelvin).
// Depending on the location of the city, the function should return degrees in either fahrenheit or centigrade.
export default function convertTemp(country, temp) {
    if (country == "US") {
         return parseInt((Number(temp) - 273.15) * 9/5 + 32) + "F";
    } else {
        return parseInt(Number(temp) - 273.15) + "C";
    }
}