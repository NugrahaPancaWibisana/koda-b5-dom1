const celciusToFahrenheit = (c) => {
  return c * 1.8 + 32;
};

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e.target.celcius.value);

  document.querySelector("div p:nth-child(1)").textContent = `Celcius: ${e.target.celcius.value}`;
  document.querySelector("div p:nth-child(2)").textContent = `Fahrenheit: ${celciusToFahrenheit(e.target.celcius.value)}`;
});
