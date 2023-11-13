function convertTemperature() {
    var celsius = document.getElementById("celsius").value;
    var fahrenheit = (celsius * 9/5) + 32;
    var result = celsius + "°C is " + fahrenheit.toFixed(2) + "°F.";
    document.getElementById("result").textContent = result;
}