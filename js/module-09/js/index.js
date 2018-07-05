"use strict";

const stopwach = document.querySelector(".js-time");
const startBtn = document.querySelector(".js-start");
const lapBtn = document.querySelector(".js-take-lap");
const resetBtn = document.querySelector(".js-reset");
const laps = document.querySelector(".js-laps");

class Timer {
  constructor({ onTick }) {
    this.startTime = null;
    this.deltaTime = null;
    this.timerId = null;
    this.isActive = false;
    this.onTick = onTick;
    this.pauseTime = null;
  }
  start() {
    if (!this.isActive) {
      this.isActive = true;
      this.startTime = Date.now();
      resetBtn.disabled = true;
      startBtn.textContent = "Pause";
      this.timerId = setInterval(() => {
        const currentTime = Date.now();
        this.deltaTime = this.pauseTime + currentTime - this.startTime;
        this.pauseTime = this.deltaTime;
        const time = new Date(this.deltaTime);
        const min = time.getMinutes();
        const sec = time.getSeconds();
        const ms = Number.parseInt(time.getMilliseconds() / 100);
        this.onTick({ min, sec, ms });
      }, 100);
    } else {
      this.isActive = false;
      clearInterval(this.timerId);
      startBtn.textContent = "Continue";
      resetBtn.disabled = false;
    }
  }

  lap() {
    const item = document.createElement("li");
    item.textContent = stopwach.textContent;
    item.classList.add("js-item");
    laps.appendChild(item);
  }

  reset() {
    this.startTime = null;
    this.deltaTime = null;
    this.isActive = false;
    this.pauseTime = null;
    stopwach.textContent = "00:00.0";
    startBtn.textContent = "Start";
    const removeLaps = document.querySelector(".js-laps");
    removeLaps.textContent = null;
  }
}

const timer = new Timer({ onTick: updateClockface });

startBtn.addEventListener("click", timer.start.bind(timer));
lapBtn.addEventListener("click", timer.lap.bind(timer));
resetBtn.addEventListener("click", timer.reset.bind(timer));

updateClockface({ min: 0, sec: 0, ms: 0 });

function updateClockface({ min, sec, ms }) {
  let minute = min < 10 ? `0${min}` : `${min}`;
  let second = sec < 10 ? `0${sec}` : `${sec}`;
  stopwach.textContent = `${minute}:${second}.${ms}`;
}
