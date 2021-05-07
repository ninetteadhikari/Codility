// returns the earliest number that is >= X
function FrogRiverOne(X, A) {
  let index
  for (let i = 0; i < A.length; i++) {
    if (A[i] >= X) {
      index = i
      return index
    }
  }
  if (index) {
    return index
  } else {
    return -1
  }
}

// returns the earliest number when all the positions from 1 to X are covered
function solution (X, A) {
  const leaves = new Array(X + 1)
  let minTime = -1
  // add leaves sequence
  for (let i = 0; i < A.length; i++) {
    if (leaves[A[i]] === undefined) {
      leaves[A[i]] = i
    }
  }

  // loop through leaves to see if they complete path
  for (let j = 1; j <= X; j++) {
    if (leaves[j] === undefined) {
      minTime = -1
      return minTime
    } else {
      minTime = Math.max(minTime, leaves[j])
    }
  }
  return minTime
}

// FrogRiverOne(5, [1, 3, 1, 4, 2, 3, 5, 4])
// FrogRiverOne(2, [2, 2, 2, 2, 2])
// FrogRiverOne(3, [1, 3, 1, 3, 2, 1, 3])
// FrogRiverOne(2, [1, 1, 1, 1])
