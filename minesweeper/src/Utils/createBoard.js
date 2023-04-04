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

  return matrix;
}
