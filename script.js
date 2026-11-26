const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

const startBtn = document.getElementById('start-continue');
const stopBtn = document.getElementById('stop');


let hours = 0;
let minutes = 0;
let seconds = 0;
let timerInterval = null;


function formatTime(value) {
    return value < 10 ? '0' + value : value;
}


function updateTimer() {
    seconds++;

  if (seconds === 60) {
seconds = 0;
minutes++;

if (minutes === 60) {
    minutes = 0;
    hours++;
} 
  }

secondsEl.textContent = formatTime(seconds);
minutesEl.textContent = formatTime(minutes);
hoursEl.textContent = formatTime(hours);
}

startBtn.addEventListener('click', () => {
if (timerInterval !== null) return;

timerInterval = setInterval(updateTimer, 1000);

stopBtn.style.opacity = '0.5';
startBtn.style.opacity = '1';
});

stopBtn.addEventListener('click', () => {
if (timerInterval === null) return;

clearInterval(timerInterval);
timerInterval = null;

startBtn.style.opacity = '0.5';
stopBtn.style.opacity = '1';
startBtn.textContent = 'Продовжити';
});
    
      
