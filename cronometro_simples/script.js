let startTime;
let elapsedTime = 0;
let timerInterval;

const display = document.getElementById('display');

const start = () => {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateTime, 10);
};

const pause = () => {
    clearInterval(timerInterval);
};

const reset = () => {
    clearInterval(timerInterval);
    elapsedTime = 0;
    display.textContent = '00:00:00';
};

const updateTime = () => {
    const elapsed = Date.now() - startTime;
    elapsedTime = elapsed;
    display.textContent = formatTime(elapsed);
};

const formatTime = (milliseconds) => {
    const date = new Date(milliseconds);
    const hours = date.getUTCHours().toString().padStart(2, '0');
    const minutes = date.getUTCMinutes().toString().padStart(2, '0');
    const seconds = date.getUTCSeconds().toString().padStart(2, '0');
    const millisecondsFormatted = date.getUTCMilliseconds().toString().padStart(3, '0');
    return `${hours}:${minutes}:${seconds}`;
};
