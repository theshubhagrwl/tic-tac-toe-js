const X_CLASS = "x";
const CIRCLE_CLASS = "circle";
let circlesTurn = false;
const cells = document.querySelectorAll("[data-cell]");
const board = document.getElementById("board");

startGame();

function startGame() {
  circlesTurn = false;
  cells.forEach((cell) => {
    cell.addEventListener("click", handleClick, { once: true });
  });
}

function handleClick(event) {
  const cell = event.target;
  const currentClass = circlesTurn ? CIRCLE_CLASS : X_CLASS;
  placeMark(cell, currentClass);
  switchTurns();
}

function placeMark(cell, currentClass) {
  cell.classList.add(currentClass);
}

function switchTurns() {
  circlesTurn = !circlesTurn;
}
