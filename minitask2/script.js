const red = document.querySelector("span:nth-child(1)");
const yellow = document.querySelector("span:nth-child(2)");
const green = document.querySelector("span:nth-child(3)");

function changeToYellow() {
  red.style.backgroundColor = "black";
  yellow.style.backgroundColor = "yellow";
}

function changeToGreen() {
  yellow.style.backgroundColor = "black";
  green.style.backgroundColor = "green";
}

function changeToRed() {
  green.style.backgroundColor = "black";
  red.style.backgroundColor = "red";
}

function trafficLight(callback, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      callback();
      resolve();
    }, time);
  });
}

(() => {
  async function start() {
    await trafficLight(changeToYellow, 3000);
    await trafficLight(changeToGreen, 2000);
    await trafficLight(changeToRed, 3000);
    start();
  }

  start();
})();
