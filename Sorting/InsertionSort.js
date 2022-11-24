/*Insertion sort  */

function InsertionSort(arr){
  for(let i=1;i<arr.length;i++){
    let NTI=arr[i]
    let j=i-1
    while(j>0&&NTI<arr[j]){
      arr[j+1]=arr[j]
      j=j-1
    }
    arr[j+1]=NTI
  }
  return arr;
}
