import { generateBoard, printBoard } from "./board.js"
export const PAIRS = "aabbccddeeffgghhiijjkkllmmooppqqrrss"

const board = generateBoard(9, 4)
printBoard(board)

const xInput = prompt("X: ")
const yInput = prompt("Y: ")

const selectCard = function (y, x) {
  board[y - 1][x - 1][1] = true
  printBoard(board)
}

selectCard(yInput, xInput)
