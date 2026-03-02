const timeDisplay = document.getElementById('time-display'); 
const startPauseButton = document.getElementById('start-pause-button'); 
const resetButton = document.getElementById('reset-button'); 

let startTime;
let updatedTime;
let difference; 
let tInterval; 
let savedTime = 0; 
let running = false;

function startPauseChrono() {
  if (!running) {
    startTime = new Date().getTime();
    startTime -= savedTime;
    tInterval = setInterval(updateTime, 10);
    running = true;
    startPauseButton.textContent = 'Pause';
    resetButton.style.display = 'inline-block';
  } else {
    clearInterval(tInterval);
    savedTime = difference;
    running = false;
    startPauseButton.textContent = 'Démarrer';
  }
}

function resetChrono() {
  clearInterval(tInterval);
  savedTime = 0;
  difference = 0;
  running = false;
  timeDisplay.textContent = '00:00:00';
  startPauseButton.textContent = 'Démarrer';
  resetButton.style.display = 'none';
}

function updateTime() {
  updatedTime = new Date().getTime();
  difference = updatedTime - startTime;

  let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((difference % (1000 * 60)) / 1000);
  let centiseconds = Math.floor((difference % 1000) / 10);

  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;
  centiseconds = (centiseconds < 10) ? "0" + centiseconds : centiseconds;

  timeDisplay.textContent = minutes + ':' + seconds + ':' + centiseconds;
}

startPauseButton.addEventListener('click', startPauseChrono);
resetButton.addEventListener('click', resetChrono);

resetButton.style.display = 'none';