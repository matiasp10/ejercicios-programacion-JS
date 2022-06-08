function betterThanAverage(classPoints, yourPoints) {
   let sum = 0
   for (let i = 0; i < classPoints.length; i++){
     sum += classPoints[i]
   } 
   
   sum = (sum + yourPoints) / (classPoints.length + 1)
   
   if (sum <= yourPoints){
       return true
     } else {
       return false
     }
 }

 function betterThanAverage(classPoints, yourPoints) {
    classPoints.push(yourPoints)
    let sum = 0
    for (let i = 0; i < classPoints.length; i++){
      sum += classPoints[i]
    } 
    sum = sum / classPoints.length
    if (sum < yourPoints){
        return true
      } return false
  }