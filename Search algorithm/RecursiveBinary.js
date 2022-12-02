let arr = [5, 9, 4, 2, 4, 3, 4, 8, 1, 10, 15, 7]

function recursiveBinarySearch(arr, target,left,right) {
if(left>right){
  return -1
}
  let mid=Math.floor((left+right)/2)
  if(arr[mid]===target){
    return target
  }
  if(target<arr[mid]){
     return recursiveBinarySearch(arr,target,left,mid-1)
  }else{
     return recursiveBinarySearch(arr,target,mid+1,right)
  }
}

console.log(recursiveBinarySearch(arr.sort((a,b)=>a-b), 15,0,arr.length-1))
