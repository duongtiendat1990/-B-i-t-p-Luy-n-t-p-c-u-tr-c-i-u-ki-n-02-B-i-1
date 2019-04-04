function checkConverterType() {
    let checkType = document.getElementById("type");
    let fromOp1 = document.getElementById("fromOp1");
    let fromOp2 = document.getElementById("fromOp2");
    let toOp1 = document.getElementById("toOp1");
    let toOp2 = document.getElementById("toOp2");
    switch (checkType.value) {
        case "temperature":
            fromOp1.value = "Celsius";
            fromOp1.innerText = "Celsius";
            fromOp2.value = "Fahrenheit";
            fromOp2.innerText = "Fahrenheit";
            toOp1.value = "Celsius";
            toOp1.innerText = "Celsius";
            toOp2.value = "Fahrenheit";
            toOp2.innerText = "Fahrenheit";
        break;
        case "length":
            fromOp1.value = "Meters";
            fromOp1.innerText = "Meters";
            fromOp2.value = "Feet";
            fromOp2.innerText = "Feet";
            toOp1.value = "Meters";
            toOp1.innerText = "Meters";
            toOp2.value = "Feet";
            toOp2.innerText = "Feet";
        break;
    }
    document.getElementById("fromOp1").value = fromOp1.value;
    document.getElementById("fromOp2").value = fromOp2.value;
    document.getElementById("toOp1").value = toOp1.value;
    document.getElementById("toOp2").value = toOp2.value;
    document.getElementById("fromOp1").innerText = fromOp1.innerText;
    document.getElementById("fromOp2").innerText = fromOp2.innerText;
    document.getElementById("toOp1").innerText = toOp1.innerText;
    document.getElementById("toOp2").innerText = toOp2.innerText;

}
function checkFromUnit() {
    let fromUnit = document.getElementById("From");
    let toUnit = document.getElementById("To");
    let fromValue =document.getElementById("fromValue").value;
    let toValue;
    if (fromUnit.value===toUnit.value) {
        toValue=fromValue
    } else  {
        switch (fromUnit.value) {
            case "Celsius":
                toValue = celsiusToFahrenheit(fromUnit.value) ;
            break;
            case "Fahrenheit":
                toValue = fahrenheitToCelsius(fromUnit.value);
            break;
            case "Meters":
                toValue = metersToFeet(fromUnit.value);
            break;
            case "Feet":
                toValue = feetToMeters(fromUnit.value);
            break;
        }
    }
    document.getElementById("toValue").value = toValue
}
function checkToUnit() {
    let toUnit = document.getElementById("To");
    let fromUnit = document.getElementById("From");
    let toValue = document.getElementById("toValue").value;
    let fromValue;
    if (toUnit.value===fromUnit.value) {
        fromValue=toValue;
    } else  {
        switch (toUnit.value) {
            case "Celsius":
                fromValue = celsiusToFahrenheit(toUnit.value);
            break;
            case "Fahrenheit":
                fromValue = fahrenheitToCelsius(toUnit.value);
            break;
            case "Meters":
                fromValue = metersToFeet(toUnit.value) ;
            break;
            case "Feet":
                fromValue = feetToMeters(toUnit.value) ;
            break;
        }
    }
    document.getElementById("fromValue").value = fromValue;
}
function celsiusToFahrenheit(celsius) {
    farenheit = (celsius*9/5)+32;
    return farenheit
}
function fahrenheitToCelsius(fahrenheit) {
    celsius = (fahrenheit-32)*5/9
}
function metersToFeet(meters) {
    feet = meters * 3.28084;
    return feet;
}
function feetToMeters(feet) {
    meters = feet / 3.29084;
    return meters;
}