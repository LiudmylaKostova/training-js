const body = document.querySelector("body");

body.innerHTML = `<ul class="btnList">
<button class = "btnStart">Start</button>
<button class= "btnLap">Lap</button>
<button class = "btnStop">Stop</button>
<p class="numbers"></p>
</ul>
<div class="wrapper"></div>`;

const buttonStart = document.querySelector(".btnStart");
const buttonLap = document.querySelector(".btnLap");
const buttonStop = document.querySelector(".btnStop");
const btnList = document.querySelector(".btnList");
const numRef = document.querySelector(".numbers");
const wrapperRef = document.querySelector(".wrapper");

let counter = 0;
let timer;

function startCount() {
  buttonStart.setAttribute("disabled", "disabled");

  timer = setInterval(() => {
    counter += 100;
    numRef.textContent = counter / 1000 + "sec";
  }, 100);
  buttonStop.textContent = "Stop";
}

function stopCount() {
  clearInterval(timer);
  buttonStart.removeAttribute("disabled");

  if (buttonStop.textContent === "Stop") {
    buttonStop.textContent = "Reset";
  } else {
    buttonStop.textContent === "Reset";
    counter = 0;
    numRef.textContent = counter;
  }
}

function setLap() {
  let text = `<p>${counter / 1000}</p>`;
  wrapperRef.innerHTML += text;
}

function changeColor(e) {
  e.target.textContent === "Start"
    ? startCount()
    : e.target.textContent === "Stop"
    ? stopCount()
    : e.target.textContent === "Reset"
    ? stopCount()
    : e.target.textContent === "Lap"
    ? setLap()
    : "";
}

btnList.addEventListener("click", changeColor);
