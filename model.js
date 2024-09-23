const grid = [
  [0, 2, 1],
  [1, 0, 2],
  [2, 1, 1],
];

function init() {
  console.log("Model kører");
}

function writeToCell(row, col, value) {
  grid[row][col] = value;
}

function readFromCell(row, col) {
  return grid[row][col];
}

function dump() {
  console.table(grid);
}

export { init, writeToCell, readFromCell, dump };

// function writeToCell(event) {
//   const cell = event.target;
//   console.log("click", cell);

//   const row = cell.dataset.row;
//   const col = cell.dataset.col;
//   console.log(`Clicked on: row: ${row}, col:${col}`);

//   const value = prompt("Skriv en værdi");
//   cell.innerText = value;
// }
