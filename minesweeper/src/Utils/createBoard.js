import createCell from './createCell';

export function createBoard(width, height, mines) {
  const matrix = [];
  for (let row = 0; row < height; row++) {
    const newRow = [];

    for (let col = 0; col < width; col++) {
      newRow.push(createCell(row, col));
    }

    matrix.push(newRow);
  }

  insertMines(matrix, mines);

  return matrix;
}

function insertMines(matrix, mines) {
  
  let minesToInsert = mines;

  while(minesToInsert > 0 ) {
    let row = Math.floor(Math.random() * matrix.length);
    let col = Math.floor(Math.random() * matrix[0].length);

    if(!matrix[row][col].isMine) {
      matrix[row][col].isMine = true;
    }

    minesToInsert--;
  }
}
