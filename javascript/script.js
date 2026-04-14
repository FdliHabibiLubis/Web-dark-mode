let body = document.body;
const darkLimit = 5; // limit klik nya
let darkCounter = 0; // Banyak klik nya
let darkRemainingLeft; // sisa klik nya

function darkMode() {
  if (darkRemainingLeft == 1) {
    info.textContent = "Jatah Fitur Dark Mode sudah habis";
    return;
  }
  darkCounter += 1;
  darkRemainingLeft = darkLimit - darkCounter;

  info.textContent = `Dark mode diklik ${darkCounter} tersisa ${darkRemainingLeft}`
  body.classList.toggle("dark");
}
