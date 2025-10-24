let minutes = localStorage.getItem('pomodoroMinutes') ? parseInt(localStorage.getItem('pomodoroMinutes')) : 25;
let seconds = localStorage.getItem('pomodoroSeconds') ? parseInt(localStorage.getItem('pomodoroSeconds')) : 0;
let timerInterval;

function updateTimer() {
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');

    minutesElement.textContent = String(minutes).padStart(2, '0');
    secondsElement.textContent = String(seconds).padStart(2, '0');
}

function startTimer() {
    if (!timerInterval) {
        timerInterval = setInterval(() => {
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(timerInterval);
                    timerInterval = null;
                    alert('Time is up! Take a break!');
                    return;
                }
                minutes--;
                seconds = 59;
            } else {
                seconds--;
            }

            localStorage.setItem('pomodoroMinutes', minutes);
            localStorage.setItem('pomodoroSeconds', seconds);
            updateTimer();
        }, 1000);
    }
}

document.getElementById('start').addEventListener('click', startTimer);

document.getElementById('pause').addEventListener('click', () => {
    clearInterval(timerInterval);
    timerInterval = null;
});

document.getElementById('reset').addEventListener('click', () => {
    clearInterval(timerInterval);
    timerInterval = null;
    minutes = 25;
    seconds = 0;
    localStorage.setItem('pomodoroMinutes', minutes);
    localStorage.setItem('pomodoroSeconds', seconds);
    updateTimer();
});

window.addEventListener('load', () => {
    updateTimer();
    if (localStorage.getItem('pomodoroMinutes') !== '25' || localStorage.getItem('pomodoroSeconds') !== '0') {
        startTimer();
    }
});
