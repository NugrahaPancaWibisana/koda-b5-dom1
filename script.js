const celciusToFahrenheit = (c) => {
  return parseInt(c) * 1.8 + 32;
};

const celciusToKelvin = (c) => {
  return parseInt(c) + 273.15;
};

const celciusToReamur = (c) => {
  return parseInt(c) * 0.8;
};

const form = document.querySelector("form");

document.body.style.padding = "50px";
document.body.style.fontFamily = "Arial, Helvetica, sans-serif";
document.querySelector("label").style.fontSize = "20px";

form.style.display = "flex";
form.style.flexDirection = "column";
form.style.width = "300px";
form.style.gap = "10px";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e.target.celcius.value);

  document.querySelector(
    "div p:nth-child(1)"
  ).textContent = `Celcius: ${e.target.celcius.value}`;

  document.querySelector(
    "div p:nth-child(2)"
  ).textContent = `Fahrenheit: ${celciusToFahrenheit(e.target.celcius.value)}`;

  document.querySelector(
    "div p:nth-child(3)"
  ).textContent = `Kelvin: ${celciusToKelvin(e.target.celcius.value)}`;

  document.querySelector(
    "div p:nth-child(4)"
  ).textContent = `Reamur: ${celciusToReamur(e.target.celcius.value)}`;
});
