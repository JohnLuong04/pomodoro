function pomodoro(duration = 25){

}

function shortBreak(duration = 5){

}

function longBreak(duration = 30){

}

function start(){

}

function pause(){

}

const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

startButton.addEventListener("click", start);
pauseButton.addEventListener("click", pause);