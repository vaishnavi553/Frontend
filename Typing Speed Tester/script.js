const quotes = [
  "The quick brown fox jumps over the lazy dog.",
  "Practice makes perfect and perfection takes practice.",
  "JavaScript is fun once you understand the logic.",
  "Success is the sum of small efforts repeated daily.",
  "Typing fast is not about speed, but accuracy."
];

const quoteElement = document.getElementById("quote");
const input = document.getElementById("input");
const startBtn = document.getElementById("startBtn");
const timeElement = document.getElementById("time");
const wpmElement = document.getElementById("wpm");
const errorsElement = document.getElementById("errors");
const accuracyElement = document.getElementById("accuracy");

let time = 60;
let timer = null;
let currentQuote = "";
let errors = 0;
let totalTyped = 0;
let correctTyped = 0;
let isTestRunning = false;

function loadQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  currentQuote = quotes[randomIndex];
  quoteElement.innerHTML = "";
  currentQuote.split("").forEach(char => {
    const span = document.createElement("span");
    span.innerText = char;
    quoteElement.appendChild(span);
  });
}

function startTest() {
  if (isTestRunning) return;

  isTestRunning = true;
  input.disabled = false;
  input.value = "";
  input.focus();
  startBtn.disabled = true;

  loadQuote();

  timer = setInterval(() => {
    if (time > 0) {
      time--;
      timeElement.innerText = time;
    } else {
      endTest();
    }
  }, 1000);
}

function endTest() {
  clearInterval(timer);
  input.disabled = true;
  startBtn.disabled = false;
  isTestRunning = false;

  let wpm = Math.round((correctTyped / 5) / ((60 - time) / 60));
  wpmElement.innerText = isNaN(wpm) ? 0 : wpm;

  let accuracy = Math.round((correctTyped / totalTyped) * 100);
  accuracyElement.innerText = isNaN(accuracy) ? "0%" : accuracy + "%";
}

input.addEventListener("input", () => {
  const quoteSpans = quoteElement.querySelectorAll("span");
  const typedValue = input.value.split("");

  totalTyped++;

  let correctCount = 0;
  errors = 0;

  quoteSpans.forEach((span, index) => {
    const char = typedValue[index];

    if (char == null) {
      span.classList.remove("correct", "incorrect");
    } else if (char === span.innerText) {
      span.classList.add("correct");
      span.classList.remove("incorrect");
      correctCount++;
    } else {
      span.classList.add("incorrect");
      span.classList.remove("correct");
      errors++;
    }
  });

  correctTyped = correctCount;
  errorsElement.innerText = errors;

  if (typedValue.length === currentQuote.length) {
    loadQuote();
    input.value = "";
  }
});

startBtn.addEventListener("click", startTest);
