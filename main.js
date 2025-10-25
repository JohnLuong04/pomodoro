function countdown(){
    if(duration === 0){
        clearInterval(interval);
        timer.innerHTML = "00:00";
        switch(sessionType){
            case 0:
                pomodorosCompleted++;
                pomodoroCount.textContent = "Total Pomodoros Completed: " + pomodorosCompleted;
                break;
            case 1:
                shortBreaksCompleted++;
                shortCount.textContent = "Total Short Breaks Taken: " + shortBreaksCompleted;
                break;
            case 2:
                longBreaksCompleted++;
                longCount.textContent = "Total Long Breaks Taken: " + longBreaksCompleted;
                break;
        }
        totalSessions += 1;
        if(totalSessions % 8 === 7){
            sessionType = 2;
        }
        else if(totalSessions % 2 === 1){
            sessionType = 1;
        }
        else if(totalSessions % 2 === 0){
            sessionType = 0;
        }
        timerStarted = false;
        return;
    }
    minutes = Math.floor(duration / 60);
    seconds = duration % 60;
    if(seconds < 10 || minutes < 10){
        if(minutes < 10 && seconds < 10){
            timer.innerHTML = "0" + minutes + ":0" + seconds;
        }
        else if(seconds < 10){
            timer.innerHTML = minutes + ":0" + seconds;
        }
        else {
            timer.innerHTML = "0" + minutes + ":" + seconds;
        }
    }
    else{
        timer.innerHTML = minutes + ':' + seconds;
    }
    duration--;
}

function initTimer(){
    if(!timerStarted) {
        timerStarted = true;
        interval = setInterval(countdown, 1000);
    }
}

function start(){
    // durations are 1 second off to account for setInterval's initial delay
    switch(sessionType){
        case 0:
            if(duration === 0){
                duration = 1499
            }
            initTimer(duration)
            break;
        case 1:
            if(duration === 0){
                duration = 299
            }
            initTimer(duration)
            break;
        case 2:
            if(duration === 0){
                duration = 1799
            }
            initTimer(duration)
            break;
    }
}

function pause(){
    timerStarted = false;
    clearInterval(interval);
}

let interval;
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");
const timer = document.querySelector("#timer");
const pomodoroCount = document.querySelector("#pomodoros-completed");
const shortCount = document.querySelector("#short-breaks");
const longCount = document.querySelector("#long-breaks");
startButton.addEventListener("click", start);
pauseButton.addEventListener("click", pause);
let pomodorosCompleted = 0;
let shortBreaksCompleted = 0;
let longBreaksCompleted = 0;
let totalSessions = 0;
let sessionType = 0;
let minutes = 0;
let seconds = 0;
let duration = 0;
let timerStarted = false;