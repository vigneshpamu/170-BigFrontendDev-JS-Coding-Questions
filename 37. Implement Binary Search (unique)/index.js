/**
 * @param {number[]} arr - ascending unique array
 * @param {number} target
 * @return {number}
 */
function binarySearch(arr, target) {
  let low = 0
  let high = arr.length - 1

  while (low <= high) {
    let mid = Math.floor((low + high) / 2)

    if (arr[mid] < target) {
      low = mid + 1
    } else if (arr[mid] > target) {
      high = mid - 1
    } else {
      return mid
    }
  }

  return -1
}
