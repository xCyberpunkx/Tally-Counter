let counter = 0;

const increaseButton = document.getElementById("increase");
const decreaseButton = document.getElementById("decrease");
const resetButton = document.getElementById("reset");
const countLabel = document.getElementById("countLabel");

increaseButton.addEventListener("click", () => {
  counter++;
  animateValue(countLabel, counter - 1, counter, 250);
});

decreaseButton.addEventListener("click", () => {
  counter--;
  animateValue(countLabel, counter + 1, counter, 250);
});

resetButton.addEventListener("click", () => {
  animateValue(countLabel, counter, 0, 250, () => {
    counter = 0;
  });
});

function animateValue(element, start, end, duration, callback) {
  let range = end - start;
  let current = start;
  let increment = end > start ? 1 : -1;
  let stepTime = Math.abs(Math.floor(duration / range));
  let timer = setInterval(() => {
    current += increment;
    element.innerHTML = current;
    if (current === end) {
      clearInterval(timer);
      if (callback) callback();
    }
  }, stepTime);
}