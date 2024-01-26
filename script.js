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

let board = createBoard();
console.dir(board);
