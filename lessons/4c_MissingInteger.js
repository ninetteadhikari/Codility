// Create counter, if counter is 0/missing or null return index/missing value.
// This will capture negatives as they will be null
function MissingInteger (A) {
  const counter = new Array(A.length + 1).fill(0)
  for (const value of A) {
    counter[value] += 1
  }
  for (let i = 1; i <= counter.length; i++) {
    if (counter[i] === 0 || !counter[i]) {
      return i
    }
  }
}

// Create counter with max value length. For negative max return 1, and for
// positive check if there is a missing value in the counter. For the missing
// value return the index of the missing space or if no missing then return
// value after the max.
function MissingInteger1 (A) {
  const max = Math.max(...A)
  let min
  if (max > 0) {
    const counter = new Array(max + 1).fill(0)
    for (const i of A) {
      counter[i] += 1
    }
    for (let i = 1; i < counter.length; i++) {
      if (counter[i] === 0) {
        min = i
      }
    }
    if (!min) {
      min = max + 1
      return min
    }
  } else {
    min = 1
  }
  return min
}

// const A = [1, 3, 6, 4, 1, 2]
// const A = [1, 3, 6, 14, 1, 2]
// const A = [1, 2, 3]
// const A = [1]
const A = [-1, -3]

MissingInteger(A)
