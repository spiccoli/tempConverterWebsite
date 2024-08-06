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


function validateTemperature(temp) {

    if (isNaN(temp)) {
        return "Invalid input. Please enter a valid number.";
    }
    if (temp < -273.15) {
        return "Temperature cannot be below absolute zero!";
    }
    return null; // No validation issues
}


function convert() {
    
    const temp = parseFloat(temperatureInput.value);
    const validationMessage = validateTemperature(temp);

    if (validationMessage) {
        resultTemp.textContent = validationMessage;
    } else {
        if (toFahrenheit.checked) {
            resultTemp.textContent = convertToFahrenheit(temp);
        } else if (toCelsius.checked) {
            resultTemp.textContent = convertToCelsius(temp);
        } else {
            resultTemp.textContent = "Please select a unit.";
        }
    }
}
