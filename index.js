
const temperatureInput = document.getElementById("textBox");

const toFahrenheit = document.getElementById("toFahrenheit");

const toCelsius = document.getElementById("toCelsius");

const resultTemp = document.getElementById("resultTemp");


function convertToFahrenheit(temp) {
    return (temp * 1.8 + 32).toFixed(2) + "°F";

}


function convertToCelsius(temp) {
    return ((temp - 32) / 1.8).toFixed(2) + "°C";

}

// Handle conversion based on user selection
function convert() {
    
    const temp = parseFloat(temperatureInput.value);

    if (toFahrenheit.checked) {
        resultTemp.textContent = convertToFahrenheit(temp);
    } 
    else if (toCelsius.checked) {
        resultTemp.textContent = convertToCelsius(temp);
    } 
    else {
        resultTemp.textContent = "Please select a unit.";
    }

}
