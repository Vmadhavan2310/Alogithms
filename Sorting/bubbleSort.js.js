/* bubble sort */

function bubbleSort(arr){
  let swap;
  do{
    swap=false;
  for(let i=0;i<arr.length;i++){
    if(arr[i]>arr[i+1]){
      [arr[i],arr[i+1]]=[arr[i+1],arr[i]]
      swap=true
    }
  }  
  }while(swap)
  
  return arr;
}

console.log(bubbleSort(arr))
