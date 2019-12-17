function getGap(binary){

}

function binaryGap(N){
let binary=N.toString(2)
let gap=0



for (let i=0;i<binary.length;i++){
  if(binary.charAt(i)===1 && binary.charAt(i+1)!==1){
    gap=7
  }
}

if(binary.indexOf(1)!==binary.indexOf(1,binary.indexOf(1)+1)){
  return binary.indexOf(1,binary.indexOf(1)+1)-binary.indexOf(1)-1
}
return gap
}

binaryGap(9)