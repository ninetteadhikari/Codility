// Lesson 2b CyclicRotation

function CyclicRotation(A,K){
if(A.length!==0){
if(K<A.length){
  A.unshift(...A.splice(-K))
}
else{
for (let i=1;i<=K;i++){
   A.unshift(A.pop())
}
}
}
return A
}

//  CyclicRotation([3, 8, 9, 7, 6],3)
//  CyclicRotation([0,0,0],1)
//  CyclicRotation([1,2,3,4],4)
//  CyclicRotation([],4)
