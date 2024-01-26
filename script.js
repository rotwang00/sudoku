const createBoard = function () {
  let newBoard = [];
  for (let i = 1; i <= 81; i++) {
    let cell = {
      cellNumber: i,
      row: 1,
      column: 2,
      zone: 4,
      isSolved: false,
      values: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    };
    newBoard.push(cell);
  }
  return newBoard;
};

let board = createBoard();
console.dir(board);
