let timer;
let running = false;
let startTime;
let elapsedTime = 0;

const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');
const timeDisplay = document.getElementById('time');

startStopBtn.addEventListener('click', () => {
    if (running) {
        clearInterval(timer);
        elapsedTime += performance.now() - startTime;
        startStopBtn.textContent = 'Start';
    } else {
        startTime = performance.now();
        timer = setInterval(updateTimeDisplay, 10); // Update every 10 milliseconds
        startStopBtn.textContent = 'Stop';
    }
    running = !running;
});

resetBtn.addEventListener('click', () => {
    clearInterval(timer);
    running = false;
    elapsedTime = 0;
    startStopBtn.textContent = 'Start';
    updateTimeDisplay();
});

function updateTimeDisplay() {
    const time = running ? elapsedTime + (performance.now() - startTime) : elapsedTime;
    const hours = Math.floor(time / 3600000);
    const minutes = Math.floor((time % 3600000) / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor(time % 1000);

    const hoursDisplay = hours < 10 ? '0' + hours : hours;
    const minutesDisplay = minutes < 10 ? '0' + minutes : minutes;
    const secondsDisplay = seconds < 10 ? '0' + seconds : seconds;
    const millisecondsDisplay = milliseconds < 100 ? milliseconds < 10 ? '00' + milliseconds : '0' + milliseconds : milliseconds;

    timeDisplay.textContent = `${hoursDisplay}:${minutesDisplay}:${secondsDisplay}.${millisecondsDisplay}`;
}
