let arr = [5, 9, 4, 2, 4, 3, 4, 8, 1, 10, 15, 7]

function BinarySearch(arr, target) {
for(let el of arr){
  if(el===target){
    return target
  }
}
  return -1
}

console.log(BinarySearch(arr, 9))
