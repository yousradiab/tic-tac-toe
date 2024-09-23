import * as controller from "./controller.js";
import * as model from "./model.js";
export { init, displayBoard };

function init() {
  console.log("View kører");
}

document.querySelectorAll(".cell").forEach((cell) => {
  cell.addEventListener("click", clickCell);
});

function clickCell(event) {
  const cell = event.target;
  console.log("click", cell);
  const row = cell.dataset.row;
  const col = cell.dataset.col;
  console.log(`Clicked on: row: ${row}, col:${col}`);
  controller.setCell(row, col);
}

function displayBoard(model) {
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      const value = model.readFromCell(row, col);
      console.log(`row: ${row}, col: ${col}, value: ${value}`);
      const visualCell = document.querySelector(
        `.cell[data-row="${row}"][data-col="${col}"]`
      );
      visualCell.innerText = value;
    }
  }
}
