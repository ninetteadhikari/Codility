function MaxCounters (N, A) {
  const counter = new Array(N + 1).fill(0)
  for (let i = 0; i < A.length; i++) {
    if (A[i] >= 1 && A[i] <= N) {
      counter[A[i]] += 1
    } else if (A[i] === N + 1) {
      const max = Math.max(...counter)
      counter.fill(max)
    }
  }
  counter.shift()
  return counter
}

MaxCounters(5, [3, 4, 4, 6, 1, 4, 4])
