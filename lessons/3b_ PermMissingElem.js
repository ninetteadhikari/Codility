function PermMissingElem(A) {
  // get total sum of the array including the missing value
  const totalSum = ((A.length + 2) * (A.length + 1)) / 2;
  // get sum of the given array
  const arraySum = A.reduce((acc, val) => {
    return acc += val;
  }, 0);
  // the difference will give the missing value
  return totalSum - arraySum;
}

PermMissingElem([2, 3, 1, 5]);
