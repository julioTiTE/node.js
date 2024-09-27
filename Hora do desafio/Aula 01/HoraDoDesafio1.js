
function converterParaFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
const temperaturasCelsius = [-10, 0, 20, 50];
temperaturasCelsius.forEach(celsius => {
    const fahrenheit = converterParaFahrenheit(celsius);
    console.log(`${celsius}°C é igual a ${fahrenheit.toFixed(1)}°F`);
});
