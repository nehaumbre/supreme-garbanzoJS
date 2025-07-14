let timerDisplay = document.getElementById("timer");
let startButton = document.getElementById("start");
let pauseButton = document.getElementById("pause");
let resetButton = document.getElementById("reset");

let totalTime = 25 * 60; //25 minutes
let timeLeft = totalTime;
let timer = null;

function updateDisplay() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  timerDisplay.textContent = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
}

function startTimer() {
  if (timer) return; //prevent multiple intervals
  timer = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      updateDisplay();
    } else {
      clearInterval(timer);
      timer = null;
      alert(`🧃Time's up! Take a cute break! 🩷🩷🩷`);
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timer);
  timer = null;
}

function resetTimer() {
  clearInterval(timer);
  timer = null;
  timeLeft = totalTime;
  updateDisplay();
}

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click',pauseTimer);
resetButton.addEventListener('click', resetTimer);

updateDisplay();