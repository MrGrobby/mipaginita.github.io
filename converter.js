function convert() {
  const inputValue = parseFloat(document.getElementById("inputValue").value);
  const fromUnit = document.getElementById("fromUnit").value;
  const toUnit = document.getElementById("toUnit").value;

  let result;
  if(inputValue.toString() === "NaN"){
    alert("Entró");
    document.getElementById("result").innerText = 'Resultado: Ingrese un valor'
    return;
  }

  if (fromUnit === toUnit) {
    result = inputValue;
  } else if (fromUnit === "meters" && toUnit === "kilometers") {
    result = inputValue / 1000;
  } else if (fromUnit === "meters" && toUnit === "miles") {
    result = inputValue / 1609.34;
  } else if (fromUnit === "kilometers" && toUnit === "meters") {
    result = inputValue * 1000;
  } else if (fromUnit === "kilometers" && toUnit === "miles") {
    result = inputValue / 1.60934;
  } else if (fromUnit === "miles" && toUnit === "meters") {
    result = inputValue * 1609.34;
  } else if (fromUnit === "miles" && toUnit === "kilometers") {
    result = inputValue * 1.60934;
  }

  document.getElementById("result").innerText = `Resultado: ${result.toFixed(2)} ${toUnit}`;
}