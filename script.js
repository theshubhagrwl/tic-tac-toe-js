const X_CLASS = "x";
const CIRCLE_CLASS = "circle";
let circlesTurn = false;
const WINNING_COMBO = [
  [0, 1, 2], //top
  [3, 4, 5], //mid
  [6, 7, 8], //bottom
  [0, 3, 6], //first col
  [1, 4, 7], //second
  [2, 5, 8], //third
  [0, 4, 8], //left diag
  [2, 4, 6], //right diag
];

const cells = document.querySelectorAll("[data-cell]");
const board = document.getElementById("board");
const winningMessageEl = document.querySelector(".winning-message");
const restartButton = document.getElementById("restart-btn");

startGame();

function startGame() {
  circlesTurn = false;
  winningMessageEl.innerText = "";
  restartButton.classList.remove("restart");
  restartButton.innerText = "";
  cells.forEach((cell) => {
    cell.classList.remove(X_CLASS);
    cell.classList.remove(CIRCLE_CLASS);
    cell.removeEventListener("click", handleClick);
    cell.addEventListener("click", handleClick, { once: true });
  });
}

function handleClick(event) {
  const cell = event.target;
  const currentClass = circlesTurn ? CIRCLE_CLASS : X_CLASS;
  placeMark(cell, currentClass);
  if (checkWin(currentClass)) {
    endGame(false);
  } else if (isDraw()) {
    endGame(true);
  } else {
    switchTurns();
  }
}

function showRestartButton() {
  restartButton.classList.add("restart");
  restartButton.innerText = "Restart";
  restartButton.addEventListener("click", startGame);
}

function endGame(draw) {
  if (draw) {
    winningMessageEl.innerHTML = "Draw";
    showRestartButton();
  } else {
    winningMessageEl.innerText = `${circlesTurn ? "O" : "X"} Wins`;
    showRestartButton(0);
  }
}

function isDraw() {
  return [...cells].every((cell) => {
    return (
      cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS)
    );
  });
}

function placeMark(cell, currentClass) {
  cell.classList.add(currentClass);
}

function switchTurns() {
  circlesTurn = !circlesTurn;
}

function checkWin(currentClass) {
  return WINNING_COMBO.some((combination) => {
    return combination.every((index) => {
      return cells[index].classList.contains(currentClass);
    });
  });
}
