import { PAIRS } from "./memory.js"

export function printBoard(board) {
  console.write("  ")
  for (let i = 0; i < board[0].length; i++) {
    console.write(`${i + 1} `)
  }
  console.write("\n")

  for (let y = 0; y < board.length; y++) {
    console.write(`${y + 1} `)
    for (let x = 0; x < board[y].length; x++) {
      if (board[y][x][1]) {
        console.write(`${board[y][x][0]} `)
      } else {
        console.write("/ ")
      }
    }
    console.write("\n")
  }
}

export function generateBoard(w, h) {
  const indexesUseable = new Set()
  const board = []

  for (let i = 0; i < PAIRS.length; i++) {
    indexesUseable.add(i)
  }

  for (let y = 0; y < h; y++) {
    const row = []
    for (let x = 0; x < w; x++) {
      while (true) {
        let item = Math.trunc(Math.random() * PAIRS.length)
        if (indexesUseable.has(item)) {
          indexesUseable.delete(item)

          row.push([PAIRS[item], false])
          break
        }
      }
    }
    board.push(row)
  }

  return board
}
