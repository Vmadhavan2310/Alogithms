/* Quick sort */

function quickSort(arr){
  if(arr.length<1) return arr
  let pivot=arr[arr.length-1]
  let leftArr=[]
  let rightArr=[]
  for(let i=0;i<arr.length-1;i++){
    if(pivot>arr[i]){
      leftArr.push(arr[i])
    }else{
      rightArr.push(arr[i])
    }
  }
  return [...quickSort(leftArr),pivot,...quickSort(rightArr)]
}

console.log(quickSort(arr))
