// Lesson 2 Arrays | OddOccurrencesInArray

// Option 1
function oddOccurrence(A){
  sorted=A.slice().sort()
  console.log(sorted)
  let count=0
  let odd
if(sorted.length===1){
  return parseInt(sorted.join())
}
else{
for(i=0;i<sorted.length-1;i++){
  if(sorted[i]===sorted[i+1]){
  count+=1
  } else{
    if(count%2===0){
odd=sorted[i]
    }
count=0
  }
}
return odd
}
}

// Option 2
function oddOccurrence(A){
let countObj=A.reduce((acc,val)=>{
  acc[val]= ++acc[val] || 1
return acc
},{})
let odd=Object.keys(countObj).filter(el=>{
  return countObj[el]%2!==0
})
return parseInt(odd.join())
}

//  Option 3
function oddOccurrence(A){
let odd=0
for (let value of A){
  odd^=value
}
return odd
}

// oddOccurrence([9,3,9,3,9,7,9])
// oddOccurrence([42])