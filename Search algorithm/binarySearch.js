let arr = [5, 9, 4, 2, 4, 3, 4, 8, 1, 10, 15, 7]

function BinarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    if (arr[mid] === target) {
      return target
    }
    if (target < arr[mid]) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return -1;
}

console.log(BinarySearch(arr.sort((a, b) => a - b), 90))
