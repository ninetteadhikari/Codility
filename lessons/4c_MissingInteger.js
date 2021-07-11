function MissingInteger (A) {
  const counter = new Array(A.length + 1).fill(0)
  console.log(counter);
  for (const value of A) {
    console.log(value)
    counter[value] += 1
  }
  console.log(counter)
  for (let i = 1; i <= counter.length; i++) {
    if (counter[i] === 0 || !counter[i]) {
      console.log(i)
      return i
    }
  }
}

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
