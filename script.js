const createBoard = function () {
  let newBoard = [];
  for (let i = 1; i <= 81; i++) {
    let cell = {
      cellNumber: i,
      row: Math.floor((i - 1) / 9 + 1),
      col: ((i - 1) % 9) + 1,
      isSolved: false,
      values: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    };
    cell.zone =
      Math.floor((cell.row - 1) / 3) * 3 + 1 + Math.floor((cell.col - 1) / 3);
    let rowComponent = Math.floor((cell.row - 1) / 3) * 3 + 1;
    let colComponent = Math.floor((cell.col - 1) / 3);
    // console.log(cell.row, cell.col, cell.zone);
    newBoard.push(cell);
  }
  return newBoard;
};

const addDataToBoard = function (board, boardData) {
  for (const [key, value] of Object.entries(boardData)) {
    let numKey = parseInt(key);
    // console.log(typeof numKey, typeof value);
    board[numKey - 1].values = [value];
    board[numKey - 1].isSolved = true;
    unsolvedCells--;
  }
};

const printBoard = function (board) {
  for (let i = 0; i < 9; i++) {
    let line = "";
    for (let j = 0; j < 9; j++) {
      let cellNumber = i * 9 + j;
      if (board[cellNumber].isSolved) {
        line += board[cellNumber].values[0];
      } else {
        line += "-";
      }
    }
    console.log(line);
  }
};

const boardData1 = {
  3: 5,
  4: 3,
  9: 1,
  11: 8,
  15: 7,
  16: 9,
  20: 1,
  24: 9,
  26: 5,
  30: 6,
  32: 4,
  37: 5,
  39: 1,
  41: 3,
  42: 8,
  43: 2,
  45: 6,
  47: 3,
  50: 6,
  51: 5,
  52: 4,
  53: 8,
  54: 7,
  55: 9,
  56: 5,
  58: 4,
  59: 7,
  62: 6,
  63: 2,
  64: 1,
  65: 2,
  69: 6,
  70: 5,
  71: 7,
  72: 3,
  73: 3,
  76: 2,
};

let unsolvedCells = 81;
let board = createBoard();
addDataToBoard(board, boardData1);

while (unsolvedCells > 0) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let cellNumber = i * 9 + j;
      if (board[cellNumber].isSolved) next;
    }
  }
}
// printBoard(board);
// console.dir(board);
// console.log(unsolvedCells);
