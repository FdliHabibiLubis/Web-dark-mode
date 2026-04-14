let body = document.body;
let info = document.getElementById("info");
let mode = document.getElementById("mode");
let home = document.getElementById("home");
let redModeBtn = document.getElementById("redMode"); 

let darkRemainingLeft = 5; // kasih nilai awal
const darkLimit = 5;
let darkCounter = 0;

function darkMode() {
  if (darkRemainingLeft == 0) {
    info.textContent = "Jatah Fitur Dark Mode sudah habis";
    mode.style.display = "none";
    home.textContent = "RESTART";
    return;
  }

  darkCounter += 1;
  darkRemainingLeft = darkLimit - darkCounter;

  info.textContent = `Dark mode diklik ${darkCounter} tersisa ${darkRemainingLeft}`;

  // aktifkan dark & matikan red
  body.classList.toggle("dark");
  body.classList.remove("redMode");

  mode.classList.toggle("dark");

  if (mode.textContent === "MODE-DARK") {
    mode.textContent = "MODE-LIGHT";
  } else {
    mode.textContent = "MODE-DARK";
  }
}

function redMode() {
  if (darkRemainingLeft == 0) {
    info.textContent = "Jatah Fitur Red Mode sudah habis";
    redModeBtn.style.display = "none";
    home.textContent = "RESTART";
    return;
  }

  darkCounter += 1;
  darkRemainingLeft = darkLimit - darkCounter;

  info.textContent = `Red mode diklik ${darkCounter} tersisa ${darkRemainingLeft}`;

  body.classList.toggle("redMode");
  body.classList.remove("dark");

  redModeBtn.classList.toggle("redMode");
}

function Reload() {
  location.reload();
}