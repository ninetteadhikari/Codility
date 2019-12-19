// Lesson 1 Iterations | Binary Gap

function binaryGap(N){
let binary=N.toString(2)
console.log("number: "+binary)

let gap=0
let maxGap=0
let lastOne=binary.lastIndexOf(1)

for (let i=lastOne-1;i>=0;i--){
if (binary.charAt(i)==="0"){
  gap+=1
}
else {
  if (maxGap < gap){
    maxGap=gap
  }
    gap=0
}
}
return maxGap
}

// binaryGap(9)
// binaryGap(32)
// binaryGap(1041)