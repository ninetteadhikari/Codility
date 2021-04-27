// Lesson 3a FrogJmp

function FrogJmp(X, Y, D) {
  let count;
  if (X === Y) {
    count = 0;
  } else {
    for (let i = 1; X <= Y; i++) {
      X += D;
      count = i;
    }
  }
  return count;
}

// FrogJmp(10, 85, 30)
// FrogJmp(10, 10, 40)
// FrogJmp(10, 20, 40)

// Other solutions
function solution(X, Y, D) {
  if(X === Y) {
      return 0;
  } else if(D >= (Y-X)) {
      return 1;
  } else {
      var jumps = parseInt((Y-X)/D);
      jumps += ((Y-X)%D > 0) ? 1 : 0;
      
      return jumps;
  }
}

function solution(X, Y, D) {
  return Math.ceil((Y - X) / D);
}