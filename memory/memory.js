import { generateBoard, printBoard } from "./board.js"
export const PAIRS = "aabbccddeeffgghhiijjkkllmmooppqqrrss"

const board = generateBoard(9, 4)
printBoard(board)

console.log(board)

const xInput = prompt("X: ")
const yInput = prompt("Y: ")

const selectCard = function (y, x) {
  board[y][x].revealed = true
  printBoard(board)
}

selectCard(yInput, xInput)
