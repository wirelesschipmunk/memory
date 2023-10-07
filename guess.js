const NUM_RANGE = [1, 10]
const ATTEMPTS = 5

console.log("Guess My number!!!")

const num =
  Math.trunc(Math.random() * (NUM_RANGE[1] - NUM_RANGE[0])) + NUM_RANGE[0]

for (let i = 0; i < ATTEMPTS; i++) {
  const guess = Number(prompt("guess:"))
  if (guess === num) {
    console.log("correct!")
    break
  }

  console.log(guess > num ? "to high!" : "to low!")
}
