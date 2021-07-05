function superbowlWin(arr){
   const found = arr.find(element => element.result === 'W')
   return found? found.year : undefined;
 }