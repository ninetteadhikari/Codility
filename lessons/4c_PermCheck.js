// Sort the array and check if element match next index. Array alway starts from 1.
function PermCheck (A) {
  const sorted = A.sort((a, b) => a - b)
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] !== (i + 1)) {
      return 0
    }
  }
  return 1
}

// Sort the array and then compare the consecutive elements to see if the
// difference is 1
function PermCheck (A) {
  const sorted = A.sort((a, b) => a - b)
  for (let i = 0; i < sorted.length - 1; i++) {
    let diff = sorted[i + 1] - sorted[i]
    if (diff !== 1) {
      return 0
    }
  }
  return 1
}

// Create a counter and see if there is any missing value in the counter
function PermCheck (A) {
  const counter = []
  for (const i in A) {
    if (!counter[A[i]]) {
      counter[A[i]] = 1
    } else {
      counter[A[i]] += 1
    }
  }

let start = false
  for (let i = 1; i < counter.length; i++) {
    if (counter[i]) {
      start = true
    }
    if (start && !counter[i]) {
      return 0
    }
  }
  return 1
}


// const A = [4, 1, 3, 2] // return 1
// const A = [4, 1, 3] // return 0

PermCheck(A)
