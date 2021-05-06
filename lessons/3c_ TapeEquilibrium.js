function TapeEquilibrium(A) {
  let minDiff;
  for (let i = 0; i < A.length - 1; i++) {
    const newArray1 = A.slice(0, i + 1);
    const newArray2 = A.slice(i + 1);
    const newArray1Sum = newArray1.reduce((acc, val) => {
      return (acc += val);
    }, 0);

    const newArray2Sum = newArray2.reduce((acc, val) => {
      return (acc += val);
    }, 0);

    const diff = Math.abs(newArray1Sum - newArray2Sum);

    if (i === 0) {
      minDiff = diff;
    }
    if (diff < minDiff) {
      minDiff = diff;
    }
  }

  return minDiff;
}

TapeEquilibrium([3, 1, 2, 4, 3]);

// solution 2
function TapeEquilibrium(A) {
  let minDiff;
  let rightSum = A.reduce((acc,val)=>{
    return acc+=val
  },0)
  let leftSum=0;
  for (let i = 0; i < A.length - 1; i++) {
    leftSum += A[i];
    rightSum -= A[i];
    const diff = Math.abs(rightSum - leftSum);
    if (i === 0) {
      minDiff = diff;
    }
    if (diff < minDiff) {
      minDiff = diff;
    }
  }
  return minDiff;
}
