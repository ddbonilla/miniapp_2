export default function createCell(row, col) {
    return {
        row,
        col,
        value: 0,
        isMine: false,
    }
}