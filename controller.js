import * as view from "./view.js";
import * as model from "./model.js";

function init() {
  console.log("Controller kører");
  model.init();
  view.init();

  window.model = model;
}

function setCell(row, col) {
  model.writeToCell(row, col, 1);
  model.dump();
  view.displayBoard(model);
}

export { init, setCell };
