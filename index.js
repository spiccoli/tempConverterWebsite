// Get references to HTML elements
const temperatureInput = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const resultTemp = document.getElementById("resultTemp");

// Convert temperature to Fahrenheit
function convertToFahrenheit(temp) {
    return (temp * 1.8 + 32).toFixed(2);
}

// Convert temperature to Celsius
function convertToCelsius(temp) {
    return ((temp - 32) / 1.8).toFixed(2);
}

// Validate user input
function validateTemperature(temp) {
    if (isNaN(temp)) {
        return "Invalid input. Please enter a valid number.";
    }
    if (temp < -273.15) {
        return "Temperature cannot be below absolute zero!";
    }
    return null; // No validation issues
}

// Display result based on selected unit
function displayResult(temp, unit) {
    let convertedTemp;
    if (unit === "F") {
        convertedTemp = convertToFahrenheit(temp) + "°F";
    } else if (unit === "C") {
        convertedTemp = convertToCelsius(temp) + "°C";
    } else {
        convertedTemp = "Please select a unit.";
    }
    resultTemp.textContent = `Result: ${convertedTemp}`;
}

// Main conversion function
function convert() {
    const temp = parseFloat(temperatureInput.value);
    const validationMessage = validateTemperature(temp);

    if (validationMessage) {
        resultTemp.textContent = validationMessage;
    } else {
        if (toFahrenheit.checked) {
            displayResult(temp, "F");
        } else if (toCelsius.checked) {
            displayResult(temp, "C");
        }
    }
}
