const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const resultTemp = document.getElementById("resultTemp");

function convert(){
    const temp = parseFloat(textBox.value); // Convert input value to a floating-point number

    if (toFahrenheit.checked) {
        resultTemp.textContent = (temp * 1.8 + 32).toFixed(2); // Convert to Fahrenheit
    } else if (toCelsius.checked) {
        resultTemp.textContent = ((temp - 32) / 1.8).toFixed(2); // Convert to Celsius
    } else {
        resultTemp.textContent = "Select a unit";
    }
}